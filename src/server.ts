import express from 'express';
import path from 'path';
import logging from './config/logging';
import config from './config/env';

const namespace = process.env.NAMESPACE || 'PROVIDERS API';
const app = express();

const env = process.env.NODE_ENV || 'development';

config(env, app);

app.listen(app.get('port'), () => {
    logging.info(namespace, `LISTENING ON PORT ${app.get('port')} `);
});
