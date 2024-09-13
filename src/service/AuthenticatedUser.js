import axios from 'axios';

export const applyToken = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};