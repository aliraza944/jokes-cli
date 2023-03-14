import axios from "axios";
import chalk from "chalk";
const getRandomJokes = async (type: string): Promise<string> => {
  try {
    const { data } = await axios.get(
      `https://official-joke-api.appspot.com/jokes/${type}/random`
    );

    return `
    ${chalk.green(data.setup)}
    
    ${chalk.yellow.bgBlack.bold(data.punchline)}
    `;
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
export default getRandomJokes;
