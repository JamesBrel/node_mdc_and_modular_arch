import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlInsertRequest {
  public static insertOne(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _properties: {}
  ): Promise<{status: boolean; message: string}> {
    return _database
      .createQueryBuilder()
      .insert()
      .into(_entity)
      .values(_properties)
      .execute()
      .then((_) => {
        return {
          status: true,
          message: "Insertion Success"
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
