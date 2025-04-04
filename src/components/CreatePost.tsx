import React, { useState } from "react";
import { createUserPost } from "../services/Api";
import { PostFormData } from "../types/PostFormData";
import Comment from "./Comment";

interface CreatePostProps {
  userId: string | number;
  onPostCreated: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ userId, onPostCreated }) => {
  const [formData, setFormData] = useState<PostFormData>({ title: "", body: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [postId, setPostId] = useState<number | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const newPost = await createUserPost(userId, formData);
      setPostId(newPost.id);
      setSuccess(true);
      setFormData({ title: "", body: "" });
      onPostCreated();
    } catch (err) {
      setError("Failed to create post. Please try again." + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2>Create New Post</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Post created successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            className="form-control"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            rows={5}
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
          {isSubmitting ? "Creating..." : "Create Post"}
        </button>
      </form>

      {/* ✅ Hiển thị phần bình luận khi đã có postId */}
      {postId && <Comment postId={postId} />}
    </div>
  );
};

export default CreatePost;
