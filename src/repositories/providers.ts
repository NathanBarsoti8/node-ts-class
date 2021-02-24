import IProviders from '../interfaces/providers';
import IDefaultResponse from '../interfaces/defaultResponse';
import Providers from '../models/providers';

class ProviderRepository {
    constructor() {}

    async create(data: IProviders): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        console.log('response', response);

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
}

export default ProviderRepository;
