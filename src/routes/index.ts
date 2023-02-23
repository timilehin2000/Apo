import { Application } from "express";
import authRouter from "./auth.route";

const index = (app: Application) => {
    app.use("api/v1", authRouter);
};

export default index;
