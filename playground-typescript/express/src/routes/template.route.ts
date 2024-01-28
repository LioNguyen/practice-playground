import express from "express";

import { getData, getDetail } from "@/controllers/template.controller";

const router = express.Router();

router.get("/template", getData);
router.get("/template/:id", getDetail);

export default router;
