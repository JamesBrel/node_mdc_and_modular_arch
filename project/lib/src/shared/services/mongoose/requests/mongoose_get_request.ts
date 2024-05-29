import {Model} from "mongoose";

class MongooseGetRequest {
  public static async fetchOne<T>(
    _model: Model<T>,
    _properties: object,
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _model
      .findOne(_properties)
      .populate(_populatePaths!)
      .then((data) => {
        if (data != null) {
          return {
            status: true,
            message: "Fetch success",
            data
          };
        } else {
          return {
            status: false,
            message: "No Content"
          };
        }
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }
  public static async fetchOneById<T>(
    _model: Model<T>,
    _id: string,
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _model
      .findById(_id)
      .populate(_populatePaths!)
      .then((data) => {
        if (data != null) {
          return {
            status: true,
            message: "Fetch success",
            data
          };
        } else {
          return {
            status: false,
            message: "No Content"
          };
        }
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }

  public static async fetchAll<T>(
    _model: Model<T>,
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _model
      .find({})
      .populate(_populatePaths!)
      .then((data) => {
        if (data.length != 0) {
          return {
            status: true,
            message: "Fetch success",
            data
          };
        } else {
          return {
            status: false,
            message: "No Content"
          };
        }
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }

  public static async fetchAllByFilter<Type>(
    _model: Model<Type>,
    _properties: {},
    _populatePaths?: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _model
      .find(_properties)
      .populate(_populatePaths!)
      .then((data) => {
        if (data.length != 0) {
          return {
            status: true,
            message: "Fetch success",
            data
          };
        } else {
          return {
            status: false,
            message: "No Content"
          };
        }
      })
      .catch((_error: any) => {
        return {
          status: false,
          message: _error.message
        };
      });
  }
}

export {MongooseGetRequest};
