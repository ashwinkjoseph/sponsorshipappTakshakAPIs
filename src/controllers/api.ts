import { NextFunction, Request, Response } from "express";
import * as moment from "moment";
import * as mongoose from "mongoose";
import { CompanyModel, default as Company } from "../models/Company";
class ApiController {
  public add(req: Request, res: Response, next: NextFunction) {
    // logic for post
    const company: CompanyModel = new Company({
      companyName:  req.body.companyName,
      latlng: req.body.latlng,
    });
    Company.findOne({
      companyName:  req.body.companyName,
      latlng: req.body.latlng,
    }).exec().then((results) => {
      if (results) {
        res.status(400).json({status: "already exists"});
      }
      else {
          company.save((err: any) => {
          if (err) {
            res.status(500).json({status: "failed"});
          }
          else {
            res.status(200).json({status: "success"});
          }
        });
      }
    });
  }
  public remove(req: Request, res: Response, next: NextFunction) {
    // logic for DELETE
    Company.remove({
      _id : req.params.taskID,
    }).exec((err: any) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json({status: "Success"});
      }
    });
    // res.status(200).json({status: "ok"});
  }
  public update(req: Request, res: Response, next: NextFunction) {
    // logic for PUT
    Company.findById(req.params.taskID).exec((err: any, company: CompanyModel) => {
      company.companyName = req.body.companyName;
      company.latlng = req.body.latlng;
      company.save((err: any) => {
        if (err) {
          res.status(500).json({status: err});
        }
        else {
          res.status(500).json({status: "ok"});
        }
      });
    });
    // res.status(200).json({status: "ok"});
  }
  public read(req: Request, res: Response, next: NextFunction) {
    // logic for GET
    Company.find({}, (err: any, company: CompanyModel) => {
      if (err) {
        res.status(500).json({status: "failed"});
      }
      else {
        res.status(200).json(company);
      }
    });
    // res.status(200).json({status: "ok"});
  }

  public readParticular(req: Request, res: Response, next: NextFunction) {
    Company.findById(req.params.taskID).exec((err: any, company: CompanyModel) => {
      if (err) {
        res.status(500).json({status: err});
      }
      else {
        res.status(200).json(company);
      }
    });
  }

}

const apiController = new ApiController();
export default apiController;
