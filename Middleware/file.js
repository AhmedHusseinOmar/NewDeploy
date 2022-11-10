import dotenv from "dotenv";
import { response } from "express";
dotenv.config();





// url in node is anything after the port  // http:localhost:4000/post

export const file = (req, res, next) => {
    if (process.env.DEBUG==="TRUE"){

   
     console.log(req.url);
   
}
    next();

}

export const errorHandler = (error, req, res, next) => {
    res.status(error.status ||404).send(error.message || "Route Unknown");
  };
  