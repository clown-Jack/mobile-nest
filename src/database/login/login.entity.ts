import {PrimaryGeneratedColumn, Entity, Column } from 'typeorm'

/**
 * 创建实体
 */
@Entity()
export class Login{
  @PrimaryGeneratedColumn()
  id:number;

  @Column({length:10})
  usrname:string;

  @Column()
  password:string
}