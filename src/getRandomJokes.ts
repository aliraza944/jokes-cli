import axios from "axios";
import chalk = require("chalk");
export const getRandomJokes = async () => {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );

    return `
    ${chalk.blue(data.setup)}
    
    ${chalk.yellow.bgBlack.bold(data.punchline)}
    `;
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
