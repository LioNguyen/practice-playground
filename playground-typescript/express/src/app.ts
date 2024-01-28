require("dotenv").config();
import "@/practice";

import config from "config";
import cookieParser from "cookie-parser";
import express from "express";

import Router from "@/routes";

import "./index";

const PORT = config.get("port") || 8000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routers
app.use("/api", Router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
