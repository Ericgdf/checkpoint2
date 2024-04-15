import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import {CountryResolver} from "./resolver/CountryResolver"; 
import db from "./db";

const port = 4001;

buildSchema({
  resolvers: [CountryResolver],
}).then(async (schema) => {
  await db.initialize();
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, { listen: { port } });
  console.log(`GraphQL server listening on ${url}`);
});