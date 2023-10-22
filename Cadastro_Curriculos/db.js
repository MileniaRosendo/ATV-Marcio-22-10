const { Pool } = require('pg');

const pool = new Pool({
  user: 'oxbhpamz',
  password: 'D4yOV0IMcqTt2dScXZoBnAazcIV8ULYY',
  host: 'localhost',
  port: 3000,
  database: 'postgres://oxbhpamz:D4yOV0IMcqTt2dScXZoBnAazcIV8ULYY@isabelle.db.elephantsql.com/oxbhpamz',
});

module.exports = pool;
