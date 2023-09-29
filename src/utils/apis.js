import axios from 'axios';
import { apiUrl } from './consts';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${apiUrl}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log(`Could not get a story but I got this! -> ${error}`);
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${apiUrl}/newstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log(`Could not get the list of stories but I got this! -> ${error}`);
  }
};