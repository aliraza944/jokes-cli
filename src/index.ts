#!/usr/bin/env node
import { getRandomJokes } from "./getRandomJokes";

(async () => {
  const joke = await getRandomJokes();
  console.log(joke);
})();
