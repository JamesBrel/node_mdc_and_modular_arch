import {DataSource, EntityTarget, ObjectLiteral} from "typeorm";

class SqlGetRequest {
  public static async fetchOne(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _alias: string
  ): Promise<ObjectLiteral | null> {
    return await _database
      .getRepository(_entity)
      .createQueryBuilder(_alias)
      .getOne()
      .then((data) => {
        return data;
      });
  }
  public static async fetchOneById(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _alias: string,
    _id: number
  ): Promise<ObjectLiteral | null> {
    return await _database
      .getRepository(_entity)
      .createQueryBuilder(_alias)
      .where(`${_alias}.id = :id`, {id: _id})
      .getOne()
      .then((data) => {
        return data;
      });
  }

  public static async fetchOneByFilter(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _alias: string,
    _pathFilter: string,
    _propertiesFilter: {}
  ): Promise<ObjectLiteral | null> {
    return await _database
      .getRepository(_entity)
      .createQueryBuilder(_alias)
      .where(_pathFilter, _propertiesFilter)
      .getOne()
      .then((data) => {
        return data;
      });
  }

  public static async fetchAll(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _alias: string
  ): Promise<ObjectLiteral | null> {
    return await _database
      .getRepository(_entity)
      .createQueryBuilder(_alias)
      .getMany()
      .then((data) => {
        return data;
      });
  }

  public static async fetchAllByFilter(
    _database: DataSource,
    _entity: EntityTarget<ObjectLiteral>,
    _alias: string,
    _pathFilter: string,
    _propertiesFilter: {}
  ): Promise<ObjectLiteral | null> {
    return await _database
      .getRepository(_entity)
      .createQueryBuilder(_alias)
      .where(_pathFilter, _propertiesFilter)
      .getMany()
      .then((data) => {
        return data;
      });
  }
}

export {SqlGetRequest};
