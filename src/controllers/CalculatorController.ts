import express, { Request, Response, NextFunction } from "express";
class Calculator {
  constructor() {
    this.add = this.add.bind(this);
  }
  public async add(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).send({ message: "good" });
    } catch (error) {
      next(error);
    }
  }
}

export default new Calculator();
