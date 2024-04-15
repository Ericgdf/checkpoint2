import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continent: string;
}