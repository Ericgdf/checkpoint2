import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Field, ObjectType } from 'type-graphql';
import { Country } from './Country';

@ObjectType()
@Entity()
export class Continent extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Field()
    @Column()
    code: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Country])
  @OneToMany(() => Country, country => country.continent)
  countries: Country[];
}