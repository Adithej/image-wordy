import { Request, Response, NextFunction, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
    });
    return token;
};

export const cookieOptions: CookieOptions = {
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: "server-wz9u.onrender.com",
    signed: true,
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];

    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token Not Received" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.jwtData = decoded;
        next();
    } catch (error) {
        // If token is expired or invalid, clear the cookie
        res.clearCookie(COOKIE_NAME, cookieOptions);
        return res.status(401).json({ message: "Token Invalid or Expired" });
    }
};