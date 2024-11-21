import {InversifyExpressServer} from "inversify-express-utils";

import {Application} from "express";

import {app} from "../../shared/constants/string_const.js";
import Logger from "../../shared/logs/logger.js";
import {httpContainer} from "./inversify_config.js";
import {MiddleConfig} from "./middle_config.js";

class ServerConfig {
  /**
   * @name httpServer
   */
  public static async httpServer() {
    try {
      let _host = process.env.SERVER_HOST;
      let _port = process.env.SERVER_PORT;
      let _httpServer = new InversifyExpressServer(httpContainer);
      _httpServer.setConfig((app: Application) => {
        MiddleConfig.middle(app);
      });
      let _appServer = _httpServer.build().listen(_port, () => {
        Logger.info(
          "Http Server",
          `---- ${app}'s Server is running on ${_host}:${_port}/ 🔥 -----`
        );
      });
      return _appServer;
    } catch (error) {
      Logger.error("Http Server", `---- ${error} ----`);
      process.exit();
    }
  }
}

export {ServerConfig};
