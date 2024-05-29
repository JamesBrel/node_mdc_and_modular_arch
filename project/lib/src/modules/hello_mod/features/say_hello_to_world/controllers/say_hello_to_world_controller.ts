import {Request, Response} from "express";
import httpStatus from "http-status";
import {inject} from "inversify";
import {controller, httpGet, request, response} from "inversify-express-utils";
import {hello_api} from "../../../../../shared/constants/api_const.js";
import {v1} from "../../../../../shared/constants/version_const.js";
import {Success} from "../../../../../shared/results/result_success.js";
import {HelloWorldImpl} from "../data/impls/hello_to_world_impl.js";
import {IHelloWorld} from "../data/interfaces/hello_to_world_inter.js";

@controller(hello_api)
class SayHelloToWorldController {
  private _iHelloWorld: IHelloWorld;
  constructor(@inject(HelloWorldImpl) iHelloWorld: IHelloWorld) {
    this._iHelloWorld = iHelloWorld;
  }

  @httpGet("/")
  public async getHelloWorld(
    @request() _req: Request,
    @response() _res: Response
  ) {
    let _apiVersion = _req.header("Api-Version");
    switch (_apiVersion) {
      case v1:
        let _result = await this._iHelloWorld.sayTheHelloWorld();
        if (_result instanceof Success) {
          _res.status(httpStatus.OK).json({
            message: "system greet successfully",
            data: _result.data
          });
        }
        break;
      default:
        _res.status(httpStatus.NOT_FOUND).json({message: "version not exists"});
        break;
    }
  }
}

export {SayHelloToWorldController};
