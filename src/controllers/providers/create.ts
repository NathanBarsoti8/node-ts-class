import { Request, Response, NextFunction } from 'express';
import logging from '../../config/logging';

const namespace = 'CONTROLLERS => PROVIDERS => CREATE';

export default (req: Request, res: Response, next: NextFunction) => {
    logging.info(namespace, 'create method called');

    try {
        return res.status(200).json({ message: 'ok' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};
