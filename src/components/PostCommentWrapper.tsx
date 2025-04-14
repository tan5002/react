// components/PostCommentWrapper.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import PostComments from './PostComments';

const PostCommentWrapper: React.FC = () => {
  const { postId } = useParams();

  if (!postId) {
    return <div>Không tìm thấy postId trên URL.</div>;
  }

  const parsedId = parseInt(postId, 10);
  if (isNaN(parsedId)) {
    return <div>postId không hợp lệ.</div>;
  }

  return <PostComments postId={parsedId} />;
};

export default PostCommentWrapper;
