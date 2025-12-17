import sequelize from '../db/sequelize.js';

import Follower from '../db/models/Follower.js';
import Recipe from '../db/models/Recipe.js';
import User from '../db/models/User.js';
import HttpError from '../helpers/HttpError.js';

/**
 * Отримати список підписників конкретного користувача
 * + recipesCount
 * + isFollowing (для поточного юзера)
 * + recipesPreview (до 4)
 */
export const getFollowers = async (
  userId,
  currentUserId,
  { limit, offset }
) => {
  return await Follower.findAndCountAll({
    where: { userId },
    limit,
    offset,
    distinct: true,
    include: [
      {
        model: User,
        as: 'followerUser',
        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*)
                FROM "recipes" r
                WHERE r."userId" = "followerUser"."id"
              )`),
              'recipesCount',
            ],
            [
              sequelize.literal(`EXISTS(
                SELECT 1
                FROM "followers" f2
                WHERE f2."followerId" = ${sequelize.escape(currentUserId)}
                  AND f2."userId" = "followerUser"."id"
              )`),
              'isFollowing',
            ],
          ],
        },
        include: [
          {
            model: Recipe,
            as: 'recipes',
            attributes: ['id', 'title', 'thumb'],
            separate: true,
            limit: 4,
            order: [['createdAt', 'DESC']],
          },
        ],
      },
    ],
  });
};

/**
 * Отримати список користувачів, на яких підписаний поточний юзер
 * + recipesCount
 * + recipesPreview (до 4)
 */
export const getFollowing = async (followerId, { limit, offset }) => {
  return await Follower.findAndCountAll({
    where: { followerId },
    limit,
    offset,
    distinct: true,
    include: [
      {
        model: User,
        as: 'followedUser',
        attributes: {
          include: [
            [
              sequelize.literal(`(
                SELECT COUNT(*)
                FROM "recipes" r
                WHERE r."userId" = "followedUser"."id"
              )`),
              'recipesCount',
            ],
          ],
        },
        include: [
          {
            model: Recipe,
            as: 'recipes',
            attributes: ['id', 'title', 'thumb'],
            separate: true,
            limit: 4,
            order: [['createdAt', 'DESC']],
          },
        ],
      },
    ],
  });
};

/**
 * Підписатись
 */
export const followUser = async ({ userId, followingId }) => {
  // Перевірка чи вже підписаний
  const existing = await Follower.findOne({
    where: { userId: followingId, followerId: userId },
  });

  if (existing) throw HttpError(409, 'Already following');

  return await Follower.create({ followerId: userId, userId: followingId });
};

/**
 * Відписатись
 */
export const unfollowUser = async ({ userId, followingId }) => {
  const relation = await Follower.findOne({
    where: { userId: followingId, followerId: userId },
  });

  if (!relation) throw HttpError(404, 'You are not following this user');

  return await relation.destroy();
};
