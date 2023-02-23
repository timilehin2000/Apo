import { AppDataSource } from "./data-source";

export default async function establishDbConnection(): Promise<void> {
    try {
        AppDataSource.initialize();
        console.log("Data source is Initialized");
    } catch (err) {
        console.log(err);
    }
}
