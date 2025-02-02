import {Request, Response} from "express";
import httpStatus from "http-status";
import {inject} from "inversify";
import {controller, httpGet, request, response} from "inversify-express-utils";
import {hello_api} from "../../../../shared/constants/api_const.js";
import {Success} from "../../../../shared/results/result_success.js";
import {HelloWorldData} from "../data/hello_to_world_data.js";

@controller(hello_api)
class SayHelloToWorldController {
  constructor(
    @inject(HelloWorldData) private _helloWorldData: HelloWorldData
  ) {}

  @httpGet("/")
  public getHelloWorld(@request() _req: Request, @response() _res: Response) {
    let _result = this._helloWorldData.sayTheHelloWorld();
    if (_result instanceof Success) {
      _res.status(httpStatus.OK).json(_result.data);
    }
  }
}

export {SayHelloToWorldController};
