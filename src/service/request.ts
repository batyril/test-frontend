import axios from 'axios';

const API_KEY = 'eb11d75e311f7ebac0f3fd2d3d5e2c76cad38e01';
const URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio';
export const requestName = async (name: string) => {
  const res = await axios.post(
    URL,
    { query: name },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + API_KEY,
      },
      withCredentials: false,
    },
  );

  return res.data;
};
