import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (userId, formData) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/users/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFixedTimeAuctionOld = async (auctionData) => {
  try {
    const response = await axios.post(`${API_URL}/fixed`, auctionData);
    return response.data;
  } catch (error) {
    console.error('Errore durante la creazione dell\'asta a tempo fisso:', error);
    throw error;
  }
};

export const createFixedTimeAuction = async (auctionData) => {
    const response = await axios.post('/api/auctions/create', {
        auctionType: 'fixed_time',
        ...auctionData,
    });
    return response.data;
};

export const createDescendingAuction = async (auctionData) => {
  const response = await axios.post('/api/auctions/create', {
      auctionType: 'descending_price',
      ...auctionData, 
  });
  return response.data;
};


export const sd = async (auctionData) => {
  try {
    const response = await axios.post(`${API_URL}/descending`, auctionData);
    return response.data;
  } catch (error) {
    console.error('Errore durante la creazione dell\'asta al ribasso:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
      const response = await axios.get(`${API_URL}/categories`);
      return response.data;
  } catch (error) {
      console.error('Errore nel recupero delle categorie', error);
      throw error;
  }
};