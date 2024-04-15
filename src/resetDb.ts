import db from "./db";
import { Continent } from "./entities/Continent";
import { Country } from "./entities/Country"; // Assurez-vous d'importer votre entité Country ici

async function clearDB() {
    const runner = db.createQueryRunner();
  
    await Promise.all(
      db.entityMetadatas.map(async (entity) =>
        runner.query(`DROP TABLE IF EXISTS ${entity.tableName}`)
      )
    );
  
    await db.synchronize();
  }

  // Ajoutez cinq pays initiaux à la base de données
  async function main() {
    await db.initialize();
    await clearDB();
  
    const europe = Continent.create({
        code: "EU",
        name: "Europe"
      });
      await europe.save();

    const france = Country.create({
      code: "FR",
      name: "France",
      emoji: "🇫🇷",
      continent: europe
    });
    await france.save();
  
    const germany = Country.create({
      code: "DE",
      name: "Germany",
      emoji: "🇩🇪",
      continent: europe
    });
    await germany.save();
  
    const usa = Country.create({
      code: "US",
      name: "United States",
      emoji: "🇺🇸",
      continent: europe
    });
    await usa.save();
  
    const brazil = Country.create({
      code: "BR",
      name: "Brazil",
      emoji: "🇧🇷",
      continent: europe
    });
    await brazil.save();
  
    const australia = Country.create({
      code: "AU",
      name: "Australia",
      emoji: "🇦🇺",
      continent: europe
    });
    await australia.save();

 
  
    // Vous pouvez ajouter d'autres pays de la même manière
  }
  
   

main();
