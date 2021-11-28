import JsonWebToken from 'jsonwebtoken';
import { JWT_SECRET } from '../consts.js';
import { db } from '../database/index.js';

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export const authRequired = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.sendStatus(403);
    }

    const bearer = bearerHeader.split(' ');
    const token = bearer[1];

    try {
        const decoded = JsonWebToken.verify(token, JWT_SECRET);
        const user = db.chain.get('users').find({ id: decoded.sub }).value();

        if (!user) return res.sendStatus(401);

        req.user = user;

        next();
    } catch (err) {
        return res.sendStatus(401);
    }
};
