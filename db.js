const { Pool } = require("pg");

// Fill up your postgres details in the
// .env.example file and rename it to .env
const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
});

module.exports = pool;
