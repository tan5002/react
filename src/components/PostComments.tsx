import React, { useEffect, useState } from "react";
import { getCommentsByPost, createCommentForPost } from "../services/gorestApi";

interface Props {
  postId: number;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostComments: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const fetchComments = () => {
    getCommentsByPost(postId).then((res) => setComments(res.data));
  };

  useEffect(() => {
    console.log("🧪 Đang hiển thị comment cho postId:", postId);
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCommentForPost(postId, name, email, body);
      alert("Bình luận đã được thêm");
      fetchComments();
      setName("");
      setEmail("");
      setBody("");
    } catch (err: any) {
      console.error("❌ Lỗi API:", err.response?.data || err.message);
      alert("Không thể thêm bình luận. Xem console để biết thêm chi tiết.");
    }
  };

  return (
    <div>
      <div className="container my-4">
        <h4>Bình luận cho bài viết #{postId}</h4>
        <ul className="list-group mb-4">
          {comments.map((c) => (
            <li key={c.id} className="list-group-item">
              <strong>{c.name}</strong> ({c.email}): {c.body}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <h5 className="mb-3">Thêm bình luận</h5>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Nội dung"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Gửi bình luận
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostComments;
