import * as followersServices from '../services/followersServices.js';
import HttpError from '../helpers/HttpError.js';
import UserDTO from '../dtos/UserDTO.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

/**
 * GET /api/users/:id/followers
 * Отримати всіх підписників користувача
 */
export const getFollowers = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const currentUserId = req.user.id;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  const { rows, count } = await followersServices.getFollowers(
    id,
    currentUserId,
    { limit, offset }
  );

  const data = rows.map((f) => {
    const u = f.followerUser;

    return {
      ...new UserDTO(u),
      recipesCount: Number(u.get('recipesCount')) || 0,
      isFollowing: Boolean(u.get('isFollowing')),
      recipesPreview: (u.recipes || []).map((r) => ({
        id: r.id,
        title: r.title,
        image: r.thumb,
      })),
    };
  });

  res.json({
    data,
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    itemsPerPage: limit,
  });
});

/**
 * GET /api/users/current/following
 * Отримати всіх, на кого підписаний поточний юзер
 */
export const getFollowing = ctrlWrapper(async (req, res) => {
  const userId = req.user.id;

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  const { rows, count } = await followersServices.getFollowing(userId, {
    limit,
    offset,
  });

  const data = rows.map((f) => {
    const u = f.followedUser;

    return {
      ...new UserDTO(u),
      recipesCount: Number(u.get('recipesCount')) || 0,
      recipesPreview: (u.recipes || []).map((r) => ({
        id: r.id,
        title: r.title,
        image: r.thumb,
      })),
    };
  });

  res.json({
    data,
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    itemsPerPage: limit,
  });
});

/**
 * POST /api/users/follow
 * Підписатись на користувача
 */
export const followUser = ctrlWrapper(async (req, res) => {
  const userId = req.user.id;
  const { followingId } = req.body;

  if (followingId === userId) {
    throw HttpError(400, 'You cannot follow yourself');
  }

  await followersServices.followUser({ userId, followingId });

  res.json({ message: 'Followed successfully' });
});

/**
 * DELETE /api/users/unfollow
 * Відписатись від користувача
 */
export const unfollowUser = ctrlWrapper(async (req, res) => {
  const userId = req.user.id;
  const { followingId } = req.body;

  await followersServices.unfollowUser({ userId, followingId });

  res.json({ message: 'Unfollowed successfully' });
});
