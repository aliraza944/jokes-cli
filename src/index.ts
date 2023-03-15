#!/usr/bin/env node
import getRandomJokes from "./fetchJokes/getRandomJokes.js";
import getJokesByType from "./fetchJokes/getJokesByType.js";
import yargs from "yargs/yargs";
const argv = yargs(process.argv.slice(2))
  .usage(
    "This is a cli to get jokes on your command line interface\n\nTo get a random joke:\n $funny-joke-cli\n\n To get specific type of joke:\n $funny-joke-cli <type> \n \n Types of jokes:\n general | programming | knock-knock"
  )
  .parseSync();

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

function howToUse() {}
