const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    database: 'latihan1',
    password: 'putri.030219',
    port: 5432,
    host: 'localhost'
});

module.exports = pool;