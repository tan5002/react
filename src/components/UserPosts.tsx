import React, { useEffect, useState } from 'react';
import { getPostsByUser } from '../services/gorestApi';
import { Post } from '../types/Post';
import PostComments from './PostComments';
const UserPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPostsByUser().then(response => setPosts(response.data));
  }, []);

  return (
    <div>
      <h2>User Posts</h2>
      <ul>
      {posts.map((post: any) => (
  <li key={post.id}>
    <strong>{post.title}</strong>: {post.body}
    <PostComments postId={post.id} />
  </li>
))}
      </ul>
    </div>
  );
};

export default UserPosts;
