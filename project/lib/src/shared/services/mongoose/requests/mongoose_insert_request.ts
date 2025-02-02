import {Model} from "mongoose";

class MongooseInsertRequest {
  public static async insert<T>(
    _model: Model<T>,
    properties: {}
  ): Promise<{status: boolean; message: string}> {
    return await _model
      .create(properties)
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
}

export {MongooseInsertRequest};
