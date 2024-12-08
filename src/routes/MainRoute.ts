import express from "express";
import CalculatorRoute from "./CalculatorRoute";
const router = express.Router();

router.use("/child", CalculatorRoute.router);

export default router;
