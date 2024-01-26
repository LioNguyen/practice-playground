import express from "express";

import { getTemplate } from "@/controllers/template.controller";

const router = express.Router();

router.get("/template", getTemplate);

export default router;
