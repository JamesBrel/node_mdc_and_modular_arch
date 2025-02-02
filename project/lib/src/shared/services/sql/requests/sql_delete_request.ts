import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlDeleteRequest {
  public static async deleteOneById(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _id: number
  ): Promise<{status: boolean; message: string}> {
    return await _database
      .createQueryBuilder()
      .delete()
      .from(_entity)
      .where("id = :id", {id: _id})
      .execute()
      .then((_) => {
        return {
          status: true,
          message: "Deletion Success"
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

export {SqlDeleteRequest};
