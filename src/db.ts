import { DataSource } from "typeorm";
import { Country } from "./entities/Country"; // Assurez-vous d'importer votre entité Country ici

export default new DataSource({
  type: "sqlite", // Changez le type de base de données à "sqlite" si vous utilisez SQLite
  database: "./database.sqlite", // Chemin vers votre fichier SQLite
  entities: [Country], // Ajoutez votre entité Country à la liste des entités
  synchronize: true,
  logging: true,
});