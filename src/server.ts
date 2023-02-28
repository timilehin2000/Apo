import express, { Application } from "express";
import cors from "cors";
import { config } from "dotenv";
import handleRouting from "./routing";
import establishDbConnection from "./config";
import { handleLogs } from "./config/logger";

config();

export default async function startApplication(
    app: Application
): Promise<void> {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    app.use(handleLogs);

    await establishDbConnection();

    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log("app is running,,,");
    });

    handleRouting(app);
}
