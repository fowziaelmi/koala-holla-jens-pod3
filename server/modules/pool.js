const pg = require('pg');


const pool = new pg.Pool({
  database: 'koala_holla',

module.exports = pool;
