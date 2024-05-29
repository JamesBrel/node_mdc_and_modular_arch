import {Model} from "mongoose";

class MongooseDeleteRequest {
  public static async deleteOneById<T>(
    _model: Model<T>,
    _id: string
  ): Promise<{status: boolean; message: string; data?}> {
    return await _model
      .findByIdAndDelete(_id)
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

export {MongooseDeleteRequest};
