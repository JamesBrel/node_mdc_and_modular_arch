import {Model} from "mongoose";

class MongooseUpdateRequest {
  public static async update<T>(
    _model: Model<T>,
    _id: string,
    properties: {},
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?}> {
    return await _model
      .findByIdAndUpdate(_id, properties)
      .populate(_populatePaths!)
      .then((data) => {
        return {
          status: true,
          message: "Update Success",
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

export {MongooseUpdateRequest};
