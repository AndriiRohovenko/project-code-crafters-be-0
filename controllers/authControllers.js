import UserDTO from "../dtos/UserDTO.js";
import { normalizeEmail } from "../helpers/normalizeEmail.js";
import { createUserService } from "../services/authServices.js";

export const createUserController = async (req, res) => {
  const { email } = req.body;
  const normalizedEmail = normalizeEmail(email);

  const user = await createUserService({
    ...req.body,
    email: normalizedEmail,
  });

  const userDTO = UserDTO.fromModel(user);

  return res.status(201).json({
    user: userDTO,
  });
};
