import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlGetRequest {
  public static async fetchOne(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _alias: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _database
      .getRepository(_model)
      .createQueryBuilder(_alias)
      .getOne()
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
  public static async fetchOneById(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _alias: string,
    _id: number
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _database
      .getRepository(_model)
      .createQueryBuilder(_alias)
      .where(`${_alias}.id = :id`, {id: _id})
      .getOne()
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

  public static async fetchOneByFilter(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _alias: string,
    _pathFilter: string,
    _propertiesFilter: {}
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _database
      .getRepository(_model)
      .createQueryBuilder(_alias)
      .where(_pathFilter, _propertiesFilter)
      .getOne()
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

  public static async fetchAll(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _alias: string
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _database
      .getRepository(_model)
      .createQueryBuilder(_alias)
      .getMany()
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

  public static async fetchAllByFilter(
    _database: DataSource,
    _model: EntityTarget<ObjectLiteral>,
    _alias: string,
    _pathFilter: string,
    _propertiesFilter: {}
  ): Promise<{status: boolean; message: string; data?: any}> {
    return await _database
      .getRepository(_model)
      .createQueryBuilder(_alias)
      .where(_pathFilter, _propertiesFilter)
      .getMany()
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
}

export {SqlGetRequest};
