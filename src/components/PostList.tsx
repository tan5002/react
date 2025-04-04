import React, { useState, useEffect } from "react";
import { getUserPosts } from "../services/Api";
import Post from "./post"; // Fix the casing of the file name
import { Post as PostType } from "../types/Post";

interface PostListProps {
  userId: string | number;
  refreshTrigger?: number; // Optional prop to trigger refresh when new post is created
}
const PostList: React.FC<PostListProps> = ({ userId, refreshTrigger = 0 }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await getUserPosts(userId);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later." + err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId, refreshTrigger]); // Added refreshTrigger to dependencies to reload when new post is created

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;
  if (posts.length === 0) return <div>No posts found for this user.</div>;

  return (
    <div className="post-list container mt-4">
      <h1>User Posts</h1>
      <div className="row g-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;