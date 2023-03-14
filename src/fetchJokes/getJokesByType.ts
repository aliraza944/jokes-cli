import axios from "axios";
import chalk from "chalk";
import boxen from "boxen";
import ora from "ora";
type JokeType = "general" | "programming" | "knock-knock";

const getJokesByType = async (type: JokeType): Promise<void> => {
  const spinner = ora("Loading").start();
  spinner.color = "yellow";
  try {
    const { data } = await axios.get(
      `https://official-joke-api.appspot.com/jokes/${type}/random`
    );

    if (data) {
      spinner.stop();
      const joke = `
    ${chalk.green(data[0].setup)}
    
    ${chalk.yellow.bgBlack.bold(data[0].punchline)}
    `;
      console.log(
        boxen(joke, { padding: 2, title: "Jokes", titleAlignment: "center" })
      );
    }
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
export default getJokesByType;
