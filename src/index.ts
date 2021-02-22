import providers from './routes/providers';
import { Express } from 'express';

const baseUrl = '/api/v1';

export default (app: Express) => {
    app.use(`${baseUrl}/providers`, providers);
};
