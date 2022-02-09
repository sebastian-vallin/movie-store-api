const Movie = require("../src/models/movie");
const fs = require("fs");

const file = fs.readFileSync("./seeder/movies.json");
const fileContent = file.toString("utf8");

const movies = JSON.parse(fileContent);

module.exports = async function (clear = false) {
  try {
    if (clear) {
      await Movie.deleteMany({});
      console.log("\x1b[32mMovies cleared successfully\x1b[0m");
    } else {
      await Movie.create(movies);
      console.log("\x1b[32mMovies seeded successfully\x1b[0m");
    }
  } catch (err) {
    console.error(`\x1b[31m${err}\x1b[0m`);
    process.exit(1);
  }
};