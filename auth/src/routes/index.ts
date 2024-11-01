import express from "express";
import { currentUserRouter } from "./current-user";
import { signinRouter } from "./signin";
import { signupRouter } from "./signup";
import { signoutRouter } from "./signout";

const router = express.Router();

router.use(currentUserRouter);
router.use(signupRouter);
router.use(signinRouter);
router.use(signoutRouter);


export { router as routes };
