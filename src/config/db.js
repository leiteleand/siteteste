const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'Leite.123',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});
