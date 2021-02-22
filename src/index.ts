import providers from './routes/providers';
import { Express } from 'express';

export default (app: Express) => {
    app.use('/providers', providers);
};
