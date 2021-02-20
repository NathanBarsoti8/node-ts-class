import bodyParser from 'body-parser';
import cors from 'cors';

const config = (env: string, app: any) => {
    const port = process.env.PORT || 3333;

    app.set('port', port);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
};

export default config;
