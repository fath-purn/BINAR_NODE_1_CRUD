const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    database: 'guest',
    password: 'purnomo03',
    port: 5432,
    host: 'localhost'
});

module.exports = pool;