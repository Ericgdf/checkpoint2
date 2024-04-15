import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Continent } from './Continent';

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

  @Field(() => Continent)
  @ManyToOne(() => Continent, continent => continent.countries, { eager: true })
  continent: Continent;

}