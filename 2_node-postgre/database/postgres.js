const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
<<<<<<< HEAD
    database: 'cobanode1',
    password: 'azza26',
=======
    database: 'guest',
    password: 'purnomo03',
>>>>>>> 6c2846cd8855d3346b0180a9c8acea377d015681
    port: 5432,
    host: 'localhost'
});

module.exports = pool;