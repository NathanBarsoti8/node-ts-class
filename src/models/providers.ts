import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import mongoosePaginate from 'mongoose-paginate';
import IProviders from '../interfaces/providers';

autoIncrement.initialize(mongoose.connection);

const providers: Schema = new Schema(
    {
        parentCnpjNumber: { type: String, required: true },
        cnpjNumber: { type: String, required: true },
        providerName: { type: String, required: true },
        fantasyName: { type: String, required: true },
        stateRegistration: { type: String, required: false },
        municipalRegistration: { type: String, required: false },
        // addresses: [address],
        // contacts: [contact],
        // companies: [company],
        // createdAt: { type: Date, required: false },
        // updatedAt: { type: Date, required: false },
        active: { type: String, required: false }
        // skusCount: { type: String, required: false }
    },
    { collection: 'providers', versionKey: false }
);

// const address: Schema = new Schema({
//     typeAddress: { type: String, required: true },
//     zipCode: { type: String, required: true },
//     country: { type: String, required: true },
//     state: { type: String, required: true },
//     city: { type: String, required: true },
//     street: { type: String, required: true },
//     number: { type: String, required: true },
//     complement: { type: String, required: true }
// });

// const contact: Schema = new Schema({
//     fullName: { type: String, required: true },
//     telephoneNumber: { type: String, required: true },
//     emailAddress: { type: String, required: true },
//     department: { type: String, required: true }
// });

// const company: Schema = new Schema({
//     companyId: { type: String, required: true },
//     companyName: { type: String, required: true }
// });

providers.plugin(autoIncrement.plugin, {
    model: 'providers',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

providers.plugin(mongoosePaginate);

export default mongoose.model<IProviders>('providers', providers);
