import axios from 'axios';

const API_BASE_URL = 'http://localhost:7777/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
};

// Plans API calls
export const plansAPI = {
  getAllPlans: () => api.get('/plans'),
  getPlanById: (id) => api.get(`/plans/${id}`),
  createPlan: (planData) => api.post('/plans', planData),
  updatePlan: (id, planData) => api.put(`/plans/${id}`, planData),
  deletePlan: (id) => api.delete(`/plans/${id}`),
};

// Feedback API calls
export const feedbackAPI = {
  getAllFeedback: () => api.get('/feedback'),
  createFeedback: (feedbackData) => api.post('/feedback', feedbackData),
  deleteFeedback: (id) => api.delete(`/feedback/${id}`),
};

export default api; 