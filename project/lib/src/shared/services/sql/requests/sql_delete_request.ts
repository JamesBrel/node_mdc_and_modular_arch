import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlDeleteRequest {
  public static async deleteOneById(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _id: number
  ): Promise<{status: boolean; message: string; data?}> {
    return await _database
      .createQueryBuilder()
      .delete()
      .from(_model)
      .where("id = :id", {id: _id})
      .execute()
      .then((data) => {
        return {
          status: true,
          message: "Deletion Success",
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

export {SqlDeleteRequest};
