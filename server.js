import express from "express";
import { initializeDb } from "./config/setup.js";
import todoRouter from "./routes/todo.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", todoRouter);

app.get("/healthcheck", (req, res) => {
    res.status(200);
    res.send({
        "success": true,
        "message": "Server is up and running",
        "statusCode": 200
    });
});

app.listen(PORT, async () => {
    console.log(`The server is running on ${PORT}\nPlease press Control+C to stop the server`);

    try {
        await initializeDb();
    }
    catch(error){
        console.log("Failed to initialize the database" , error.message);
        process.exit(1);
    }
});