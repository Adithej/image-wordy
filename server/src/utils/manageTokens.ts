import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
    });
    return token;
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
        return res.status(401).json({ message: "Token Invalid" });
    }
};