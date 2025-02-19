// app/services/bookService.js
import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchData = async (endpoint, params = {}) => {
  try {
    const { data } = await api.get(endpoint, { params });
    return data;
  } catch (error) {
    console.error(`Erro ao buscar ${endpoint}:`, error?.response?.data || error.message);
    throw error;
  }
};

export const getBooks = () => fetchData("/books");

export const getBookById = (id) => fetchData(`/books/${id}`);

export const getAIInsights = (id) => fetchData(`/books/${id}/ai-insights`);

export const searchBooks = ({ title = "", author = "", page = 0, size = 10 }) => 
  fetchData("/books/search", { title, author, page, size });
