import express, { Request, Response } from "express";
import { AuthService } from "../services/auth";

const router = express.Router();

router.get("/currentuser", (req: Request, res: Response) => {
  if (!req.session?.jwt) {
    res.status(401).send({ currentUser: null });
    return;
  }

  try {
    const payload = AuthService.verifyToken(req.session.jwt);
    if (!payload) {
      res.status(401).send({ currentUser: null });
      return;
    }
    res.send({
      currentUser: payload,
    });
  } catch (error) {
    res.status(401).send({ currentUser: null });
  }
});

export { router as currentUserRouter };
