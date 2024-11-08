import {Response, Request, NextFunction} from 'express';
import { AuthService } from "../services/auth";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = AuthService.verifyToken(req.session.jwt) as UserPayload;
    req.currentUser = payload;
  } catch (error) {}
  
  next();
} 