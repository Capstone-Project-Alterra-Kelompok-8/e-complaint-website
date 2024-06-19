import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './comment';

const CommentList = () => {
  // Mengambil data komentar dari Redux store
  const comments = useSelector((state) => state.newsComments.comments);

  return (
    <div className="bg-white rounded-t-2xl rounded">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          username={comment.admin ? comment.admin.name : comment.user.name}
          time={comment.update_at}
          text={comment.comment}
          profilePhoto={comment.admin ? comment.admin.profile_photo : comment.user.profile_photo}
          alignRight={comment.admin ? true : false} // Menentukan tata letak komentar berdasarkan admin atau user
        />
      ))}
    </div>
  );
};

export default CommentList;
