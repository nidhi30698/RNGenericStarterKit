import axios from 'axios';
import { API_BASE_URL } from '../../constants';  // Import the constant URL

export const apiClient = axios.create({
  baseURL: API_BASE_URL,  // Use the API base URL from constants
  headers: {
    'Content-Type': 'application/json',
  },
});
