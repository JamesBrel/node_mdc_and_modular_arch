import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlUpdateRequest {
  public static async update(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _id: number,
    _properties: {},
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?}> {
    return await _database
      .createQueryBuilder()
      .update(_entity)
      .set(_properties)
      .where("id = :id", {id: _id})
      .execute()
      .then((_) => {
        return {
          status: true,
          message: "Update Success"
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

export {SqlUpdateRequest};
