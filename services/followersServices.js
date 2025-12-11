import Follower from "../db/models/Follower.js";
import User from "../db/models/User.js";
import HttpError from "../helpers/HttpError.js";

/**
 * Отримати список підписників конкретного користувача
 */
export const getFollowers = async (userId) => {
  return await Follower.findAll({
    where: { userId },
    include: {
      model: User,
      as: "follower",
      attributes: ["id", "name", "email", "avatar"]
    }
  });
};

/**
 * Отримати список користувачів, на яких підписаний поточний юзер
 */
export const getFollowing = async (followerId) => {
  return await Follower.findAll({
    where: { followerId },
    include: {
      model: User,
      as: "user",
      attributes: ["id", "name", "email", "avatar"]
    }
  });
};

/**
 * Підписатись
 */
export const followUser = async ({ userId, followerId }) => {
  // Перевірка чи вже підписаний
  const existing = await Follower.findOne({
    where: { userId, followerId }
  });

  if (existing) throw HttpError(409, "Already following");

  return await Follower.create({ userId, followerId });
};

/**
 * Відписатись
 */
export const unfollowUser = async ({ userId, followerId }) => {
  const relation = await Follower.findOne({
    where: { userId, followerId }
  });

  if (!relation) throw HttpError(404, "You are not following this user");

  return await relation.destroy();
};
