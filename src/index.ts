import providers from './routes/providers';

export default (app: any) => {
    app.use('/providers', providers);
};
