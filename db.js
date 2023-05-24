import pg from "pg";

const pool = new pg.Pool({
  user: "pjunior",
  host: "ycit031-workshop05-postgresql.postgres.database.azure.com",
  database: "zoo_management",
  password: "jMBA#rnr!7p98jJ&",
  port: 5432,
});

export default pool;
