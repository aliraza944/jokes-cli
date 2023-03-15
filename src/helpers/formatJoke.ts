import chalk from "chalk";
import boxen from "boxen";

const formatJoke = (setup: string, punchline: string) => {
  const joke = `
    ${chalk.green(setup)}
    
    ${chalk.yellow.bold(punchline)}
    `;
  console.log(
    boxen(joke, { padding: 2, title: "Joke", titleAlignment: "center" })
  );
};

export default formatJoke;
