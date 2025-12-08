import User from "../db/models/Users.js";
import HttpError from "../helpers/HttpError.js";
import { createToken, verifyToken } from "../helpers/jwt.js";
import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import path from "node:path";
import fs from "node:fs/promises";
import { sendEmail } from "./emailServices.js";
import { nanoid } from "nanoid";
import loadTemplate from "../templates/loadTemplate.js";

const avatarsDir = path.resolve("public", "avatars");

const { PUBLIC_BASE_URL } = process.env;

export const findUser = (where) => {
  return User.findOne({ where });
};

const sendVerificationEmail = async (user) => {
  const verificationToken = nanoid();
  const verifyLink = `${PUBLIC_BASE_URL}/api/auth/verify/${verificationToken}`;
  const emailHtml = await loadTemplate("verifyEmail.html", { verifyLink });
  await sendEmail(user.email, "Verify your email", emailHtml);
  await user.update({ verificationToken });
};

export const verifyUserToken = async (verificationToken) => {
  const user = await findUser({ verificationToken });
  if (!user) {
    return;
  }
  if (user.verified) {
    throw HttpError(400, "Verification has already been passed");
  }
  await user.update({ verified: true, verificationToken: null });
  return true;
};

export const verifyUserEmail = async (email) => {
  const user = await findUser({ email });
  if (!user) {
    return;
  }
  if (user.verified) {
    throw HttpError(400, "Verification has already been passed");
  }
  await sendVerificationEmail(user);
  return true;
};

export const registerUser = async (payload) => {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const newUser = await User.create({ ...payload, password: hashedPassword });

  await sendVerificationEmail(newUser);

  const avatarURL = gravatar.url(newUser.email, { s: "250" }, true);
  await newUser.update({ avatarURL });

  return newUser;
};

export const loginUser = async ({ email, password }) => {
  const user = await findUser({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw HttpError(401, "Email or password is wrong");
  }

  if (!user.verified) {
    throw HttpError(401, "Email not verified");
  }

  const payload = { id: user.id };
  const token = createToken(payload);
  await user.update({ token });
  return {
    accessToken: token,
    user: { email: user.email, subscription: user.subscription },
  };
};

export const getCurrentUser = async (user_id) => {
  const user = await findUser({ id: user_id });
  if (!user) {
    throw HttpError(401, "Unauthorized");
  }
  return {
    email: user.email,
    subscription: user.subscription,
  };
};

export const refreshUser = async (user_id) => {
  const token = createToken({ id: user_id });
  const user = await findUser({ id: user_id });
  await user.update({ token });

  return {
    token,
    user: {
      username: user.username,
      email: user.email,
    },
  };
};

export const logoutUser = async (user_id) => {
  const user = await findUser({ id: user_id });
  await user.update({ token: null });

  return true;
};

export const updateSubscription = async (user_id, subscription) => {
  const user = await findUser({ id: user_id });
  if (!user) {
    return null;
  }

  await user.update({ subscription });

  return user;
};

export const updateAvatar = async (user_id, file) => {
  const user = await findUser({ id: user_id });
  if (!user) {
    return null;
  }
  let avatarURL = null;
  if (file) {
    const newPath = path.join(avatarsDir, file.filename);
    await fs.rename(file.path, newPath);

    avatarURL = `/avatars/${file.filename}`;
  }
  await user.update({ avatarURL: encodeURI(avatarURL) });
  return user;
};
