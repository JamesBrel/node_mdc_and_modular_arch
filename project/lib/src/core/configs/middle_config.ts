import bodyParser from "body-parser";
import cors from "cors";
import express, {Application} from "express";
import morgan from "morgan";

class MiddleConfig {
  /**
   * @name middle
   * @param _app app name
   * @param _express express name
   * @returns {null} ne retorne rien
   */

  public static middle(_app: Application) {
    _app.use(cors());
    _app.use(bodyParser.urlencoded({extended: true}));
    _app.use(bodyParser.json());
    _app.use(morgan("dev"));
    _app.disable("etag");

    _app.use("/uploads", express.static("uploads"));
  }
}
export {MiddleConfig};
