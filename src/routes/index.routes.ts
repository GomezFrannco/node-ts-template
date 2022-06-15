import { Router } from "express";
import { index } from "../controllers/index.controllers.js";

const router: Router = Router();

router.route("/").get(index);

export default router;
