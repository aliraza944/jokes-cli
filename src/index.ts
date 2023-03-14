#!/usr/bin/env node
import getRandomJokes from "./getRandomJokes.js";
import getJokesByType from "./getJokesByType.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv)).argv;
(async () => {
  await getRandomJokes();
})();
