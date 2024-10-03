import {Request, Response} from "express";
import httpStatus from "http-status";
import {inject} from "inversify";
import {controller, httpGet, request, response} from "inversify-express-utils";
import {hello_api} from "../../../../shared/constants/api_const.js";
import {Success} from "../../../../shared/results/result_success.js";
import {HelloWorldImpl} from "../data/impls/hello_to_world_impl.js";
import {IHelloWorld} from "../data/interfaces/hello_to_world_inter.js";

@controller(hello_api)
class SayHelloToWorldController {
  constructor(@inject(HelloWorldImpl) private _iHelloWorld: IHelloWorld) {}

  @httpGet("/v1/")
  public getHelloWorld(@request() _req: Request, @response() _res: Response) {
    let _result = this._iHelloWorld.sayTheHelloWorld();
    if (_result instanceof Success) {
      _res.status(httpStatus.OK).json({
        message: "system greet successfully",
        data: _result.data
      });
    }
  }
}

export {SayHelloToWorldController};
