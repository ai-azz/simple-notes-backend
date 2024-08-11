const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],  // allow request from any origin (CORS configuration)
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();