import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public firstname: string;
}

export {User};
