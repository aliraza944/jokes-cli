#!/usr/bin/env node
import getRandomJokes from "./getRandomJokes.js";
import boxen from "boxen";
(async () => {
  const joke = await getRandomJokes();
  console.log(boxen(joke, { title: "Jokes", titleAlignment: "center" }));
})();
