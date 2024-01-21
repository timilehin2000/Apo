import http from "http";
import app from "./app";
import { env } from "./env.config";
import { connectDB } from "./config/connect";

const server = http.createServer(app);

const { APP_PORT: port } = env;

const startServer = async (): Promise<void> => {
    await connectDB();
    server.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
    });
};

startServer();
