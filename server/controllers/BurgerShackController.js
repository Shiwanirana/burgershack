import BaseController from "../utils/BaseController";

let burgers = [{name: "burger1"}, {name: "burger2"}]
export class BurgerShackController extends BaseController{
  constructor(){
    super("api/burgers");
    this.router
    .get("", this.getAll)
    .post("", this.create);
  }
  
  async getAll(_, res, next){
    try{
      return res.send(burgers)
    }catch (error) {
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