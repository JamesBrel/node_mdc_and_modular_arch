import dotenv from "dotenv";
import path from "path";
import "reflect-metadata";

import {fileURLToPath} from "url";
import {OrmConfig} from "../shared/services/sql/configs/orm_config.js";
import {SqlConfig} from "../shared/services/sql/configs/sql_config.js";
import {ServerConfig} from "./configs/server_config.js";

class Init {
  public static async start() {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    dotenv.config({
      path: path.join(_dirname, `../../../envs/${process.env.NODE_ENV}.env`)
    });

    //* HttpServer
    ServerConfig.httpServer().then((_server) => {
      // MongooseConfig.mongoose();
      OrmConfig.init(SqlConfig.mysql());
    });
  }
}

export {Init};
