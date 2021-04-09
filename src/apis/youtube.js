import axios from 'axios';

const KEY = ''; //Put your youtube api key here

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  },
});
