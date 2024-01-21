import { config } from "dotenv";

config();

function getEnv(value: any, fallback?: any): any {
    const result = process.env[value];

    if ([undefined, null, ""].includes(result)) {
        if (fallback) {
            return fallback;
        }

        return undefined;
    }

    return result;
}

/**
 * App env
 */
const appEnv = {
    NODE_ENV: getEnv("NODE_ENV", "development"),
    APP_PORT: Number(getEnv("APP_PORT", 3000))
};

/**
 * Secret Env
 */
const secretEnv = {
    // OTP
    SECRET_OTP: getEnv("SECRET_OTP"),
    EXPIRED_OTP: getEnv("EXPIRED_OTP", "5m"),

    // JWT
    JWT_SECRET_ACCESS_TOKEN: getEnv("JWT_SECRET_ACCESS_TOKEN"),
    JWT_ACCESS_TOKEN_EXPIRED: getEnv("JWT_ACCESS_TOKEN_EXPIRED", "1d"),

    JWT_SECRET_REFRESH_TOKEN: getEnv("JWT_SECRET_REFRESH_TOKEN"),
    JWT_REFRESH_TOKEN_EXPIRED: getEnv("JWT_REFRESH_TOKEN_EXPIRED", "30d"),

    // BCRYPT
    BCRYPT_SALT: Number(getEnv("BCRYPT_SALT", 10))
};

/**
 * DB env
 */
const databaseEnv = {
    DB_USERNAME: getEnv("DB_USERNAME", "postgres"),
    DB_NAME: getEnv("DB_NAME", "apo"),
    DB_PASSWORD: getEnv("DB_PASSWORD", "timmy419"),
    DB_DIALECT: getEnv("DB_DIALECT", "postgres"),
    DB_PORT: Number(getEnv("DB_HOST", 5432)),
    DB_HOST: getEnv("SEQUELIZE_HOST", "127.0.0.1")
};

export const env = {
    ...appEnv,
    ...secretEnv,
    ...databaseEnv
};
