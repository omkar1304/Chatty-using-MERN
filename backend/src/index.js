import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js"

dotenv.config();
const PORT = process.env.PORT;

//* Middlewares 👇
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"))
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//*  Routes 👇
app.use("/api/auth/", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Server listening on port:", +PORT);
  connectDB();
});
