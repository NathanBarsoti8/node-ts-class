import IProviders from '../interfaces/providers';
import IDefaultResponse from '../interfaces/defaultResponse';
import Providers from '../models/providers';

class ProviderRepository {
    constructor() {}

    async create(data: IProviders): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        await Providers.create(data)
            .then((provider) => {
                response.status = 201;
                response.message = 'provider successfully created';
                response.obj = provider;
            })
            .catch((err) => {
                response.status = 400;
                response.message = err.message;
            });

        return response;
    }

    async findById(id: string | number): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        const provider = await Providers.findById(id);

        if (provider) {
            response.status = 200;
            response.message = '';
            response.obj = provider;
        } else {
            response.status = 404;
            response.message = 'not found results according this id';
        }

        return response;
    }
}

export default ProviderRepository;
