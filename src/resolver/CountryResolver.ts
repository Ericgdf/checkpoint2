import { Resolver, Query, Arg } from 'type-graphql';
import { GraphQLError } from "graphql";
import { Country } from '../entities/Country'; 

@Resolver(Country)
export class CountryResolver {
  
  @Query(() => [Country])
  async getAllcountries(): Promise<Country[]> {
    return await Country.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountryById(@Arg("id") id: number): Promise<Country | undefined> {
    const country =  await Country.findOne({where : {id}});
    if (!country) throw new GraphQLError("not found");
    return country;
  }
}