#!/usr/bin/env node
import getRandomJokes from "./getRandomJokes.js";
import boxen from "boxen";
import ora from "ora";
(async () => {
  const spinner = ora("Loading").start();
  spinner.color = "yellow";
  const joke = await getRandomJokes();
  if (joke) {
    spinner.stop();
  }
  console.log(
    boxen(joke, { padding: 2, title: "Jokes", titleAlignment: "center" })
  );
})();
