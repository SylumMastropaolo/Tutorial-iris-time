require('dotenv').config();
const bunyan = require('bunyan');

const log = {
    development: () => {
        return bunyan.createLogger({name: 'IRIS-time-development', level: 'debug'});
    },
    production: () => {
        return bunyan.createLogger({name: 'IRIS-time-production', level: 'info'});
    },
    test: () => {
        return bunyan.createLogger({name: 'IRIS-time-test', level: 'fatal'});
    }
};

module.exports = {
    opencageApiKey: process.env.OPEN_CAGE_API_KEY,
    log: (env) => {
        if(env) return log[env]();
        return log[process.env.NODE_ENV || 'development']();
    }
};
