import { NextFunction } from "express-serve-static-core";
import express, { Application, Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import secrets from "../secrets.json";

export const SECRET_KEY: Secret = secrets.JWTKEY;

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
        } catch (err) {
        res.status(401).send('Please authenticate');
    }
};