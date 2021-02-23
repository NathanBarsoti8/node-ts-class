import { Request, Response } from 'express';
import logging from '../../config/logging';
import Providers from '../../models/providers';

const namespace = 'CONTROLLERS => PROVIDERS => CREATE';

export default (req: Request, res: Response) => {
    logging.info(namespace, 'create method called');

    try {
        const { parentCnpjNumber, cnpjNumber, providerName } = req.body;

        Providers.create({
            parentCnpjNumber: parentCnpjNumber,
            cnpjNumber: cnpjNumber,
            providerName: providerName
        }).then(() => {
            return res.status(201).json({ message: 'provider successfully created' });
        });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
