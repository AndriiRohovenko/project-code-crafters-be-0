import * as usersServices from '../services/usersServices.js';
import HttpError from '../helpers/HttpError.js';
import UserDTO from '../dtos/UserDTO.js';
import uploadImageToCloudinary from '../services/cloudinary.js';

/**
 * GET /api/users
 * Отримати всіх користувачів з пагінацією та фільтрами
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    // Валідація параметрів
    if (page < 1 || limit < 1 || limit > 100) {
      throw HttpError(400, 'Invalid pagination parameters');
    }

    const result = await usersServices.getAllUsers({
      page: parseInt(page),
      limit: parseInt(limit),
      search: search.trim(),
    });
    const userDTOs = result.users.map((user) => new UserDTO(user));
    res.json({ ...result, users: userDTOs });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/users/:id
 * Отримати користувача по ID
 */
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await usersServices.getUserById(id);

    if (!user) {
      throw HttpError(404, 'User not found');
    }

    res.json(new UserDTO(user));
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await usersServices.getUserById(userId);

    if (!user) {
      throw HttpError(404, 'User not found');
    }

    res.json(new UserDTO(user));
  } catch (error) {
    next(error);
  }
};

export const updateUserAvatar = async (req, res, next) => {
  try {
    const userId = req.user.id;
    if (!req.file) {
      throw HttpError(400, 'No file uploaded');
    }

    const result = await uploadImageToCloudinary(req.file.buffer, 'avatars');
    if (!result || !result.secure_url) {
      throw HttpError(500, 'Failed to upload image to Cloudinary');
    }
    const avatarUrl = result.secure_url;

    const updatedUser = await usersServices.updateUser(userId, {
      avatar: avatarUrl,
    });

    if (!updatedUser) {
      throw HttpError(404, 'User not found');
    }

    res.json(new UserDTO(updatedUser));
  } catch (error) {
    next(error);
  }
};
