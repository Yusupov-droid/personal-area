import bcrypt from 'bcrypt';
import JsonWebToken from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import { JWT_EXP, JWT_SECRET } from '../consts.js';
import { db } from '../database/index.js';

export class AuthController {
    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    static me(req, res, next) {
        const { password, ...user } = req.user;
        return res.status(200).json(user);
    }

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    static login(req, res, next) {
        const { email, password } = req.body;
        const candidate = db.chain.get('users').find({ email }).value();

        if (!candidate) {
            return res.status(404).send('User not found.');
        }

        const isCompare = bcrypt.compareSync(password, candidate.password);

        if (!isCompare) {
            return res.status(400).send('Wrong password.');
        }

        const { password: alias, ...user } = candidate;

        const token = AuthController.generateToken(user);

        return res.status(200).json({ user, token });
    }

    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    static register(req, res, next) {
        const { name, email, password } = req.body;

        const candidate = db.chain.get('users').find({ email }).value();

        if (candidate) {
            return res.status(400).json('User already exist.');
        }

        const hashed = bcrypt.hashSync(password, 5);

        const user = {
            id: randomUUID(),
            name,
            email,
            password: hashed,
        };

        db.chain.get('users').push(user).value();
        db.write();

        const token = AuthController.generateToken(user);
        return res.status(201).json({ user, token });
    }

    static generateToken(user) {
        return JsonWebToken.sign({ user }, JWT_SECRET, {
            subject: user.id,
            expiresIn: JWT_EXP,
        });
    }
}
