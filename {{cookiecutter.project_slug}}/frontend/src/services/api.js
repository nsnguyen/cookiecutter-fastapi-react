import axios from 'axios';

// Create an axios instance with defaults
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:{{ cookiecutter.backend_port }}',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Submit data to the API
 * @param {Object} data - Data to submit
 * @returns {Promise} - Promise with API response
 */
export const submitData = async (data) => {
  try {
    const response = await api.post('/api/data/submit', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting data:', error);
    throw new Error(
      error.response?.data?.detail || 
      'Failed to submit data to API'
    );
  }
};

/**
 * Fetch data from the API
 * @returns {Promise} - Promise with fetched data
 */
export const fetchData = async () => {
  try {
    const response = await api.get('/api/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error(
      error.response?.data?.detail || 
      'Failed to fetch data from API'
    );
  }
};

/**
 * Get server status information
 * @returns {Promise} - Promise with server info
 */
export const getServerInfo = async () => {
  try {
    const response = await api.get('/api/status');
    return response.data;
  } catch (error) {
    console.error('Error getting server info:', error);
    throw new Error(
      error.response?.data?.detail || 
      'Failed to get server information'
    );
  }
};

export default api;
