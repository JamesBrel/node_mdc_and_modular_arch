import {Model} from "mongoose";

class MongooseInsertRequest {
  public static async insert<T>(
    _model: Model<T>,
    properties: {}
  ): Promise<{status: boolean; message: string; data?}> {
    return await _model
      .create(properties)
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
}

export {MongooseInsertRequest};
