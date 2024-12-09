import express from "express";
import CalculatorRoute from "./CalculatorRoute.ts";
const router = express.Router();

router.use("/child", CalculatorRoute.router);

export default router;
