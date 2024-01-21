import { Sequelize, Dialect } from "sequelize";
import { env } from "../env.config";

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT as Dialect
});

const connectDB = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("Database successfully connected");
    } catch (err) {
        console.log("Unable to connect to database: ", err);
    }
};

export { connectDB, sequelize };
