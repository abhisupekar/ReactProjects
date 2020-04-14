import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-bcf6d.firebaseio.com/'
});

export default instance;