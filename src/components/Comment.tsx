import React, { useState, useEffect } from "react";
import { getCommentsByPost, createComment } from "../services/Api";
import { CommentData, CommentFormData } from "../types/CommentData";

interface CommentSectionProps {
  postId: string | number;
}

const Comment: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState<CommentFormData>({
    name: "",
    email: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const data = await getCommentsByPost(postId);
      setComments(data);
    } catch (err) {
        console.error("Lỗi khi tải bình luận:", err); 
        setError("Lỗi khi tải bình luận.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.email || !newComment.body) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const createdComment = await createComment(postId, newComment);
      setComments((prev) => [createdComment, ...prev]);
      setNewComment({ name: "", email: "", body: "" });
    } catch (err) {
        console.error("Lỗi khi thêm bình luận:", err); 
        setError("Lỗi khi thêm bình luận.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-4">
      <h3>Bình luận</h3>
      {error && <div className="text-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-3">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Tên của bạn"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          required
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
          required
        />
        <textarea
          className="form-control"
          placeholder="Viết bình luận..."
          value={newComment.body}
          onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          required
          rows={3}
        />
        <button className="btn btn-secondary mt-2" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Đang gửi..." : "Thêm bình luận"}
        </button>
      </form>

      <ul className="list-group">
        {comments.map((comment) => (
          <li key={comment.id} className="list-group-item">
            <p className="mb-1">
              <strong>{comment.name}</strong> ({comment.email}): {comment.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
