import { Router } from "express";
import {
  registerController,
  loginController,
  getCurrentController,
  logoutController,
  updateUserSubscription,
  updateUserAvatar,
  verifyUserTokenController,
  verifyUserEmailController,
} from "../controllers/authControllers.js";

import validateBody from "../helpers/validateBody.js";
import {
  registerUserSchema,
  loginUserSchema,
  updateSubscriptionSchema,
  verifyEmailSchema,
} from "../schemas/authSchemas.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerUserSchema),
  registerController
);
authRouter.post("/login", validateBody(loginUserSchema), loginController);

authRouter.get("/current", authenticate, getCurrentController);

authRouter.post("/logout", authenticate, logoutController);

authRouter.patch(
  "/subscription",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateUserSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateUserAvatar
);

authRouter.get("/verify/:verificationToken", verifyUserTokenController);
authRouter.post(
  "/verify",
  validateBody(verifyEmailSchema),
  verifyUserEmailController
);

export default authRouter;
