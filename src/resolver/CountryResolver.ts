import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { GraphQLError } from "graphql";
import { Country } from '../entities/Country'; 
import { Continent } from '../entities/Continent';


@Resolver(Country)
export class CountryResolver {

  @Mutation(() => Country)
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("codeContinent") codeContinent: string
  ): Promise<Country> {
    const continent = await Continent.findOne({ where: { code: codeContinent } });

    if (!continent) throw new GraphQLError("Continent not found");

    const country = Country.create({ code, name, emoji });
    country.continent = continent; 
    await country.save();

    return country;
  }
  
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

  @Query(() => [Country])
  async getAllCountryFromContinent(@Arg("codeContinent") codeContinent: string): Promise<Country[]> {
    const continent = await Continent.findOne({ where: { code: codeContinent } });

    if (!continent) {
      throw new GraphQLError("Continent not found");
    }

    const countries = await Country.find({ where: { continent } });
    return countries;
  }
}


