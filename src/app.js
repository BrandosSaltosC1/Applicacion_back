import express from "express";
import AlumnosRoutes from "./routes/Alumnos.Routes.js";

const app = express();
//middlewares
app.use(express.json());

app.use(AlumnosRoutes);

export default app;