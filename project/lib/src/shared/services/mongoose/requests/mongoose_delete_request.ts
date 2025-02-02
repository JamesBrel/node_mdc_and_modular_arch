import {Model} from "mongoose";

class MongooseDeleteRequest {
  public static async deleteOneById<T>(
    _model: Model<T>,
    _id: string
  ): Promise<{status: boolean; message: string}> {
    return await _model
      .findByIdAndDelete(_id)
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

export {MongooseDeleteRequest};
