import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route
import diagnosticRoute from './routes/diagnostic.route.js';
app.use('/api/v1/diagnostic', diagnosticRoute);

export default app