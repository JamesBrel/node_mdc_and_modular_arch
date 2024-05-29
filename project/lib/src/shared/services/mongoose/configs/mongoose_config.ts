import mongoose from "mongoose";
import {app} from "../../../constants/string_const.js";
import Logger from "../../../logs/logger.js";
import {IndexConfig} from "./index_config.js";

class MongooseConfig {
  /**
   * @name mongoose
   */
  public static async mongoose() {
    let _dataUrl: string = `${process.env.DB_URL}`;

    mongoose.set("strictPopulate", true);
    await mongoose
      .connect(_dataUrl, {
        dbName: app,
        autoIndex: false
      })
      .then((_database) => {
        IndexConfig.createIndex().then((_) => {
          Logger.info(
            "Database",
            `---- ${_database.connection.name}'s Database is running 🔥 -----`
          );
        });
      })
      .catch((error) => {
        Logger.error("Database", `---- ${error} ----`);
        process.exit();
      });
  }
}

export {MongooseConfig};
