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
  const followers = await followersServices.getFollowers(id);
  const formatted = followers.map((f) => new UserDTO(f.followerUser));
  res.json(formatted);
});

/**
 * GET /api/users/current/following
 * Отримати всіх, на кого підписаний поточний юзер
 */
export const getFollowing = ctrlWrapper(async (req, res) => {
  const userId = req.user.id;
  const following = await followersServices.getFollowing(userId);
  const formatted = following.map((f) => new UserDTO(f.followedUser));
  res.json(formatted);
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
