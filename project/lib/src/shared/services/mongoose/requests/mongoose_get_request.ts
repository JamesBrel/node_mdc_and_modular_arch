import {Model} from "mongoose";

class MongooseGetRequest {
  public static async fetchOne<T>(
    _model: Model<T>,
    _properties: object,
    _populatePaths?: string
  ) {
    return await _model
      .findOne(_properties)
      .populate(_populatePaths!)
      .then((data) => {
        return data;
      });
  }
  public static fetchOneById<T>(
    _model: Model<T>,
    _id: string,
    _populatePaths?: string
  ) {
    return _model
      .findById(_id)
      .populate(_populatePaths!)
      .then((data) => {
        return data;
      });
  }

  public static async fetchAll<T>(_model: Model<T>, _populatePaths?: string) {
    return await _model
      .find({})
      .populate(_populatePaths!)
      .then((data) => {
        return data;
      });
  }

  public static async fetchAllByFilter<T>(
    _model: Model<T>,
    _properties: {},
    _populatePaths?: string
  ) {
    return await _model
      .find(_properties)
      .populate(_populatePaths!)
      .then((data) => {
        return data;
      });
  }
}

export {MongooseGetRequest};
