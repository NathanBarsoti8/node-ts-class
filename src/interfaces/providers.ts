import { Document } from 'mongoose';

interface IProviders extends Document {
    parentCnpjNumber: string;
    cnpjNumber: string;
    providerName: string;
    fantasyName: string;
    stateRegistration: string;
    municipalRegistration: string;
    // addresses: Array<IAdress>;
    // contacts: Array<IContact>;
    // companies: Array<ICompany>;
    active: string;
    // skusCount: string;
    // createdAt: Date;
    // updatedAt: Date;
}

interface IAdress extends Document {
    typeAddress: string;
    zipCode: string;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
}

interface IContact extends Document {
    fullName: string;
    telephoneNumber: string;
    emailAddress: string;
    department: string;
}

interface ICompany extends Document {
    companyId: string;
    companyName: string;
}

export default IProviders;
