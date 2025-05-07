import { Router } from "express";
import { getTips, postTips } from "../controllers/tips.controller";

const router = Router();

router.get("/", getTips);
router.post("/", postTips);

export default router;
