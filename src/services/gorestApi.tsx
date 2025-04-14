import axios from 'axios';

const API_BASE = 'https://gorest.co.in/public/v2';
const USER_ID = 7374914;
const TOKEN = 'Bearer f6254a42e24bc5a6269e1f4efe5b3feab83fdbe2e7cbdc97c186cff7f1e46f5a'; // Thay bằng token hợp lệ

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: TOKEN,
    'Content-Type': 'application/json',
  },
});

export const getPostsByUser = () => {
  return axiosInstance.get(`/users/${USER_ID}/posts`);
};

export const getTodosByUser = () => {
  return axiosInstance.get(`/users/${USER_ID}/todos`);
};

export const createTodoForUser = (title: string, due_on: string, status: string) => {
  return axiosInstance.post(`/users/${USER_ID}/todos`, {
    title,
    due_on,
    status,
  });
};

export const getCommentsByPost = (postId: number) => {
    return axiosInstance.get(`/posts/${postId}/comments`);
  };
  
  export const createCommentForPost = (postId: number, name: string, email: string, body: string) => {
    return axiosInstance.post(`/posts/${postId}/comments`, {
      name,
      email,
      body,
    });
  };
  
