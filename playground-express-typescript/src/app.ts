require("dotenv").config();

import express from "express";
import config from "config";

import Router from "@/routes";

const PORT = config.get("port") || 8000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/api", Router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
