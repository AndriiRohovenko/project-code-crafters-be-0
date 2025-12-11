import * as followersServices from "../services/followersServices.js";
import HttpError from "../helpers/HttpError.js";

/**
 * GET /api/users/:id/followers
 * Отримати всіх підписників користувача
 */
export const getFollowers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const followers = await followersServices.getFollowers(id);
    res.json(followers);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/users/current/following
 * Отримати всіх, на кого підписаний поточний юзер
 */
export const getFollowing = async (req, res, next) => {
  try {
    const userId = req.user_id;
    const following = await followersServices.getFollowing(userId);
    res.json(following);
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/users/follow
 * Підписатись на користувача
 */
export const followUser = async (req, res, next) => {
  try {
    const userId = req.user_id;
    const { followerId } = req.body;

    if (followerId == userId) {
      throw HttpError(400, "You cannot follow yourself");
    }

    await followersServices.followUser({ userId, followerId });

    res.json({ message: "Followed successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/users/unfollow
 * Відписатись від користувача
 */
export const unfollowUser = async (req, res, next) => {
  try {
    const userId = req.user_id;
    const { followerId } = req.body;

    await followersServices.unfollowUser({ userId, followerId });

    res.json({ message: "Unfollowed successfully" });
  } catch (error) {
    next(error);
  }
};
