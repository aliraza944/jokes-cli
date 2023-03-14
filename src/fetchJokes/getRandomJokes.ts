import axios from "axios";
import chalk from "chalk";
import ora from "ora";
import boxen from "boxen";
const getRandomJokes = async () => {
  const spinner = ora("Loading").start();
  spinner.color = "yellow";
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    if (data) {
      spinner.stop();
      const joke = `
    ${chalk.green(data.setup)}
    
    ${chalk.yellow.bgBlack.bold(data.punchline)}
    `;
      console.log(
        boxen(joke, { padding: 2, title: "Jokes", titleAlignment: "center" })
      );
    }
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
export default getRandomJokes;
