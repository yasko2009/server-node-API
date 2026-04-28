const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'server-API-next',
  password: 'root',
  port: 5432,
});

module.exports = pool;