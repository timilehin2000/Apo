import winston from "winston";
import morgan, { StreamOptions } from "morgan";
import { Err } from "joi";

const levels: { [key: string]: number } = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const colors: { [key: string]: string } = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "orange",
};

const level = () => {
    const env = process.env.NODE_env || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "warn";
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
);

const transports = [new winston.transports.Console()];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

const stream: StreamOptions = {
    write: (message) => logger.http(message),
};

const handleLogs = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {
        stream,
    }
);

const logErrorToConsole = (err: Err) => {
    logger.error("This is an error log");
    logger.warn("This is a warn log");
    logger.info("This is a info log");
    logger.http("This is a http log");
    logger.debug("This is a debug log");
};

export { handleLogs, logErrorToConsole };
