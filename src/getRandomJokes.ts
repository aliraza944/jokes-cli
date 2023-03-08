import axios from "axios";

export const getRandomJokes = async () => {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/jokes/random"
    );

    return `
    ${data.setup}
    
    ${data.punchline}
    `;
  } catch (error) {
    throw new Error("Error fetching jokes");
  }
};
