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

export const api = {
    url: 'http://localhost:3000/graphql'
}

export const assets = {
    style: "/static/main.css",
    javascript: "/static/bundle.js"
}