const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    database: 'cobanode1',
    password: 'azza26',
    port: 5432,
    host: 'localhost'
});

module.exports = pool;