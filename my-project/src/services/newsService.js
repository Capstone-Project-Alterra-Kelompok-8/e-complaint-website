import axios from 'axios';

const token = sessionStorage.getItem('token');

export const getNews = async () => {
  const response = await axios.get('https://capstone-dev.mdrizki.my.id/api/v1/news', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.data;
};

export const getNewsDetail = async (newsId) => {
  const response = await axios.get(`https://capstone-dev.mdrizki.my.id/api/v1/news/${newsId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data.data;
};
