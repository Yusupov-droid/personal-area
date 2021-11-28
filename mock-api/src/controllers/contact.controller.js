import { randomUUID } from 'crypto';
import { db } from '../database/index.js';

export class ContactController {
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    static async index(req, res, next) {
        const { user } = req;
        const contacts = db.chain.get('contacts').filter({ userId: user.id }).value();

        return res.json(contacts);
    }

    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    static async read(req, res, next) {
        const { user } = req;
        const id = req.params.id;

        const contact = db.chain.get('contacts').find({ id }).value();

        if (user.id !== contact.userId) {
            return res.sendStatus(403);
        }
        res.send(contact);
    }

    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    static async delete(req, res, next) {
        const { user } = req;
        const id = req.params.id;

        const contact = db.chain.get('contacts').find({ id }).value();

        if (typeof contact === 'undefined') return res.sendStatus(403);
        else if (user.id !== contact?.userId) {
            return res.sendStatus(403);
        }
        db.chain.get('contacts').remove({ id }).value();
        db.write();

        return res.status(200).send(contact);
    }

    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    static async create(req, res, next) {
        const { user } = req;
        const { name, phone } = req.body;

        const contact = {
            id: randomUUID(),
            name,
            phone,
            userId: user.id,
        };

        db.chain.get('contacts').push(contact).value();
        db.write();

        res.status(200).send(contact);
    }

    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    static async update(req, res, next) {
        const { user } = req;
        const { name, phone } = req.body;
        const id = req.params.id;

        const contact = db.chain.get('contacts').find({ id }).value();

        if (user.id !== contact.userId) {
            return res.sendStatus(403);
        }

        contact.name = name;
        contact.phone = phone;

        db.chain.get('contacts').find({ id }).update(contact).value();
        db.write();

        res.status(200).send(contact);
    }
}
