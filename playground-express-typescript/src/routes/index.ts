import express from "express";

import templateRouter from "./template.route";

const router = express.Router();

router.use(templateRouter);

export default router;
