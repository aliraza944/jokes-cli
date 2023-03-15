#!/usr/bin/env node
import getRandomJokes from "./fetchJokes/getRandomJokes.js";
import getJokesByType from "./fetchJokes/getJokesByType.js";
import yargs from "yargs/yargs";
const argv = yargs(process.argv.slice(2)).parseSync();
(async () => {
  if (
    argv._[0] === "general" ||
    argv._[0] === "programming" ||
    argv._[0] === "knock-knock"
  ) {
    await getJokesByType(argv._[0]);
    return;
  }
  await getRandomJokes();
})();
