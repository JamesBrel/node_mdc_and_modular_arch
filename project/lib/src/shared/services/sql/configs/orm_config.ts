import "reflect-metadata";
import {DataSource} from "typeorm";
import Logger from "../../../logs/logger.js";

class OrmConfig {
  public static init(database: DataSource) {
    database
      .initialize()
      .then(() => {
        Logger.info(
          "Database",
          `---- ${process.env.DB_TYPE}'s Database is running 🔥 -----`
        );
      })
      .catch((error) => {
        Logger.error("Database", `---- ${error} ----`);
        process.exit();
      });
  }
}

export {OrmConfig};
