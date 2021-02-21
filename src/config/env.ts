import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import logging from '../config/logging';

const config = (env: string, app: any) => {
    const port = process.env.PORT || 3333;

    app.set('port', port);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.options('*', cors());
    app.use(morgan('combined'));

    mongoose
        .connect('mongodb://localhost:27017/db_providers', {
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => {
            logging.info('DB', 'database successfully connected');
        })
        .catch((err) => {
            logging.error('DB', err.message, err);
        });
};

export default config;
