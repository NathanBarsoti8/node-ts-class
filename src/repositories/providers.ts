import IProviders from '../interfaces/providers';
import IDefaultResponse from '../interfaces/defaultResponse';
import Providers from '../models/providers';
import STATUS from '../enum/httpStatusCode';

class ProviderRepository {
    constructor() {}

    async create(data: IProviders): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        await Providers.create(data)
            .then((provider) => {
                response.status = STATUS.CREATED;
                response.message = 'provider successfully created';
                response.obj = provider;
            })
            .catch((err) => {
                response.status = STATUS.BAD_REQUEST;
                response.message = err.message;
            });

        return response;
    }

    async findById(id: string | number): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        const provider = await Providers.findById(id);

        if (provider) {
            response.status = STATUS.OK;
            response.message = '';
            response.obj = provider;
        } else {
            response.status = STATUS.NOT_FOUND;
            response.message = 'not found results according this id';
        }

        return response;
    }

    async delete(id: string | number): Promise<IDefaultResponse> {
        const response = {} as IDefaultResponse;

        const provider = await Providers.findById(id);

        if (provider) {
            provider.active = 'false';

            provider
                .save()
                .then(() => {
                    response.status = STATUS.OK;
                    response.message = 'providers successfully deleted';
                    response.obj = provider;
                })
                .catch((err) => {
                    response.status = STATUS.BAD_REQUEST;
                    response.message = err.message;
                });
        } else {
            response.status = STATUS.NOT_FOUND;
            response.message = 'not found results according this id';
        }

        return response;
    }

    async cnpjExists(cnpj: string): Promise<boolean> {
        const provider = await Providers.find({
            cnpjNumber: cnpj
        });

        if (provider) return true;
        else return false;
    }

    async associateCompanyInProvider(): Promise<any> {
        throw new Error('method not implemented');
    }
}

export default ProviderRepository;
