import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'locahost';
const SERVER_PORT = process.env.SERVER_HOST || 3333;

const server = {
    host: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: server
};

export default config;
