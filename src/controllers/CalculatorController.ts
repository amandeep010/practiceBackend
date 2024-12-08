import express, { Request, Response, NextFunction } from "express";
class Calculator {
  constructor() {
    this.add = this.add.bind(this);
  }
  public add(req: Request, res: Response, next: NextFunction) {
    try {
      res.send({ done: "good boi" });
    } catch (error) {
      next(error);
    }
  }
}

export default new Calculator();
