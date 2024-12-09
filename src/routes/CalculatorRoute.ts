import { Router } from "express";
import CalculatorController from "../controllers/CalculatorController.ts";

class CalculatorRoute {
  public router = Router();
  constructor() {
    this.router.get("/add", CalculatorController.add);
  }
}

export default new CalculatorRoute();
