import jwt from "jsonwebtoken";

export class AuthService {
    static generateToken(payload: any) {
        return jwt.sign(payload, process.env.JWT_KEY!, {
            expiresIn: "1d",
        });
    }

    static verifyToken(token: string) {
        return jwt.verify(token, process.env.JWT_KEY!);
    }

    static decodeToken(token: string) {
        return jwt.decode(token);
    }
}