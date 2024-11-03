import jwt from "jsonwebtoken";

export class AuthService {
    static generateToken(payload: any) {
        return jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
    }

    static verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    }

    static decodeToken(token: string) {
        return jwt.decode(token);
    }
}