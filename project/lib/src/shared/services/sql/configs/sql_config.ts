import "reflect-metadata";
import {DataSource} from "typeorm";
import {User} from "../entities/user.js";

class SqlConfig {
  /**
   * mysql Database
   */
  public static mysql() {
    return new DataSource({
      type: "mysql",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: Boolean(process.env.DB_SYNC),
      logging: true,
      entities: [User],
      subscribers: [],
      migrations: []
    });
  }

  /**
   * postgres Database (remove the slash if you want use it)
   */
  // public static postgres() {
  //   return new DataSource({
  //     type: "postgres",
  //     host: String(process.env.DB_HOST),
  //     port: Number(process.env.DB_PORT),
  //     username: process.env.DB_USER,
  //     password: process.env.DB_PASSWORD,
  //     database: process.env.DB_NAME,
  //     synchronize: Boolean(process.env.DB_SYNC),
  //     logging: true,
  //     entities: [],
  //     subscribers: [],
  //     migrations: []
  //   });
  // }

  /**
   * sqlite and other sql-type databases can be configured as above
   */
}

export {SqlConfig};
