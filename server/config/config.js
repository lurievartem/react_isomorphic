export const database = {
    url: 'mongodb://react:react@ds055515.mongolab.com:55515/isomorph_react_db',
    options: {
        server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
    }
};

export const server = {
    port: 3000
};