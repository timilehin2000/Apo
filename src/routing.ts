import { Request, Response, Application } from "express";
import { logErrorToConsole } from "./config/logger";
import authRouter from "./routes/auth.route";

export default function handleRouting(app: Application) {
    app.use("/api/v1", authRouter);

    // 404 Error Handler
    app.all("*", (req: Request, res: Response) => {
        res.status(404).json({
            status: false,
            error: "lol, and Just Like That, You Completely Lost Your Way",
            reqUrl: req.originalUrl,
        });
    });

    // Error Handler
    app.use((error: Error) => {
        logErrorToConsole(error);
    });
}
