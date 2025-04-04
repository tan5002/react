import React from "react";
import { Post as PostType } from "../types/Post";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="card col-md-4 me-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          User ID: {post.user_id}
        </h6>
        <p className="card-text">{post.body}</p>
        <a href="#" className="card-link">
          Post ID: {post.id}
        </a>
      </div>
    </div>
  );
};

export default Post;
