import {Model} from "mongoose";

class MongooseUpdateRequest {
  public static async update<T>(
    _model: Model<T>,
    _id: string,
    properties: {},
    _populatePaths?: string
  ): Promise<{status: boolean; message: string}> {
    return await _model
      .findByIdAndUpdate(_id, properties)
      .populate(_populatePaths!)
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

export {MongooseUpdateRequest};
