// src/services/restaurantService.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

class RestaurantService {
  async getRestaurants(location, filters = {}) {
    try {
      const response = await axios.get(`${API_BASE_URL}/restaurants`, {
        params: { location, ...filters }
      });
      return response.data;
    } 
    catch  {
      throw new Error('Failed to fetch restaurants');
    }
  }

  async getRestaurantById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
      return response.data;
    } catch  {
      throw new Error('Failed to fetch restaurant details');
    }
  }

  async searchRestaurants(query, location) {
    try {
      const response = await axios.get(`${API_BASE_URL}/restaurants/search`, {
        params: { q: query, location }
      });
      return response.data;
    } catch  {
      throw new Error('Search failed');
    }
  }
}

export default new RestaurantService();
