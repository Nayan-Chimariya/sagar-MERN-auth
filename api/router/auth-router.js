import express from "express";
import { signup } from "../controller/auth-controller.js";
const router = express.Router();

router.route("/signup").post(signup);

export default router;
