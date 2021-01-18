import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";


export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  
  async getAll(_, res, next) {
    try {
      return res.send( [{name: "burger1"}, {name: "burger2"}]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
      
    } catch (error) {
      next(error);
    }
  }
}
