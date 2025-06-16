import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const testBackendConnection = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('Error connecting to backend:', error);
    throw error;
  }
};

export const testFirebaseConnection = async () => {
  try {
    const response = await apiClient.get('/test-firebase');
    return response.data;
  } catch (error) {
    console.error('Error testing Firebase connection:', error);
    throw error;
  }
};

export default apiClient; 