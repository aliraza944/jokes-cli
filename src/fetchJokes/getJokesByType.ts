import axios from "axios";
import ora from "ora";
import formatJoke from "../helpers/formatJoke.js";
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
      formatJoke(data[0].setup, data[0].punchline);
    }
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
export default getJokesByType;
