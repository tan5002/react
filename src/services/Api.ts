import axios, { AxiosInstance } from "axios";
import { Post } from "../types/Post";
import { PostFormData } from "../types/PostFormData";
import { CommentData, CommentFormData } from "../types/CommentData";

// Tạo axios instance với token
const api: AxiosInstance = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer f6254a42e24bc5a6269e1f4efe5b3feab83fdbe2e7cbdc97c186cff7f1e46f5a`,
  },
});

// ✅ Lấy danh sách bài viết của user
export const getUserPosts = async (userId: string | number): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>(`/users/${userId}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};

// ✅ Tạo bài viết mới
export const createUserPost = async (
  userId: string | number,
  postData: PostFormData
): Promise<Post> => {
  try {
    const response = await api.post<Post>(`/users/${userId}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating new post:", error);
    throw error;
  }
};

// ✅ Lấy danh sách bình luận của một bài post
export const getCommentsByPost = async (postId: string | number): Promise<CommentData[]> => {
  try {
    const response = await api.get<CommentData[]>(`/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

// ✅ Tạo bình luận mới cho một bài post
export const createComment = async (
  postId: string | number,
  commentData: CommentFormData
): Promise<CommentData> => {
  try {
    const response = await api.post<CommentData>(`/comments`, {
      post_id: postId,
      ...commentData,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};
