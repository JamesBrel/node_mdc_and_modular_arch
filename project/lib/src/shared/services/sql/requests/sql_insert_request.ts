import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlInsertRequest {
  public static async insertOne(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _properties: {}
  ): Promise<{status: boolean; message: string; data?}> {
    return await _database
      .createQueryBuilder()
      .insert()
      .into(_model)
      .values(_properties)
      .execute()
      .then((data) => {
        return {
          status: true,
          message: "Insertion Success",
          data
        };
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }

  public static async insertMany(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _properties: {}[]
  ): Promise<{status: boolean; data?}> {
    return await _database
      .createQueryBuilder()
      .insert()
      .into(_model)
      .values(_properties)
      .execute()
      .then((data) => {
        return {
          status: true,
          data
        };
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }
}

export {SqlInsertRequest};
