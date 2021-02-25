import { Request, Response } from 'express';
import logging from '../../config/logging';
import IProviders from '../../interfaces/providers';
import STATUS from '../../enum/httpStatusCode';
import ProviderRepository from '../../repositories/providers';
import { cnpj } from 'cpf-cnpj-validator';

const namespace = 'CONTROLLERS => PROVIDERS => CREATE';

export default async (req: Request, res: Response) => {
    logging.info(namespace, 'create method called');

    const providerRepository = new ProviderRepository();

    try {
        const { parentCnpjNumber, cnpjNumber, providerName } = req.body;

        const validCNPJ: boolean = cnpj.isValid(cnpjNumber);

        if (!validCNPJ) {
            return res.status(STATUS.BAD_REQUEST).json({ message: 'invalid cnpj' });
        }

        const exists: boolean = await providerRepository.cnpjExists(cnpjNumber);

        if (exists) {
            return res.status(400).json({ message: 'this cnpj already exists in database' });
        }

        const provider = {
            parentCnpjNumber: parentCnpjNumber,
            cnpjNumber: cnpjNumber,
            providerName: providerName,
            active: 'true'
        } as IProviders;

        const response = await providerRepository.create(provider);

        return res.status(response.status).json({ message: response.message, obj: response.obj });
    } catch (err) {
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};
