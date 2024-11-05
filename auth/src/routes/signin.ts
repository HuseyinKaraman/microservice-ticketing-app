import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import { User } from "../models/user.model";
import { AuthService } from "../services/auth";
import { Password } from "../services/password";
import { RequestValidationError } from "../errors/request-validation-error";
import BadRequestError from "../errors/bad-request-error";

const router = express.Router();

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError("Invalid credentials");
    }

    const passwordMatch = await Password.compare(user.password, password);
    if (!passwordMatch) {
      throw new BadRequestError("Invalid credentials");
    }

    const userJwt = AuthService.generateToken({
      id: user.id,
      email: user.email,
    });

    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(user);
  }
);

export { router as signinRouter };
