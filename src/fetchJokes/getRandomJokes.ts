import axios from "axios";
import ora from "ora";
import formatJoke from "../helpers/formatJoke.js";
const getRandomJokes = async () => {
  const spinner = ora("Loading").start();
  spinner.color = "yellow";
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    if (data) {
      spinner.stop();
      formatJoke(data.setup, data.punchline);
    }
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
export default getRandomJokes;
