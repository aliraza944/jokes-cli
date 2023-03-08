import axios from "axios";

export const getRandomJokes = async () => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
