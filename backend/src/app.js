import express, { urlencoded } from "express";
import taskRouter from "./routes/task.route.js";
import morgan from "morgan";
import cors from 'cors';

const app = express();

// Middle Wares
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/task", taskRouter);

export default app;
