import { env } from "../env.config";

const { DB_USERNAME, DB_NAME, DB_DIALECT, DB_HOST, DB_PORT, DB_PASSWORD } = env;

module.exports = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
};
