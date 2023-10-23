const { Pool } = require('pg');

const pool = new Pool({
  user: 'oxbhpamz',
  password: 'D4yOV0IMcqTt2dScXZoBnAazcIV8ULYY',
  host: 'isabelle.db.elephantsql.com',
  port: 5432,
  database: 'oxbhpamz', 
});

module.exports = pool;
