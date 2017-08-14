import * as errorHandler from "errorhandler";
import { NextFunction, Request, Response, Router } from "express";

import { default as ApiController } from "../controllers/api";
class API {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/", ApiController.read);
    this.router.post("/", ApiController.add);
    this.router.put("/:taskID", ApiController.update);
    this.router.delete("/:taskID", ApiController.remove);
    this.router.get("/add", ApiController.addChecker);
  }
}

const apiRoutes = new API();
export default apiRoutes.router;
