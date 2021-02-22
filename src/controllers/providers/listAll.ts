import { Request, Response } from 'express';
import logging from '../../config/logging';
import Providers from '../../models/providers';

const namespace = 'CONTROLLERS => PROVIDERS => LIST ALL';

export default async (req: Request, res: Response) => {
    logging.info(namespace, 'list all method called');

    try {
        const providers = await Providers.find();

        if (!providers || providers.length == 0) {
            return res.status(404).json({ message: 'not found results according these parameters' });
        }

        return res.status(200).json({
            content: providers,
            count: providers.length
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
