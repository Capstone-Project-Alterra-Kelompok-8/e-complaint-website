import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from './comment';
import { useParams } from 'react-router-dom';
import { deleteComment } from '../../services/newsCommentSlice';

const CommentList = ({ newsId }) => {
   // Mengambil data komentar dari Redux store
   const comments = useSelector((state) => state.newsComments.comments);
   const dispatch = useDispatch();
 
   const handleDelete = (commentId) => {
    dispatch(deleteComment({ newsId, commentId }));
  };

  return (
    <div className="bg-white rounded-t-2xl rounded">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          commentId={comment.id}
          username={comment.admin ? comment.admin.name : comment.user.name}
          time={comment.update_at}
          text={comment.comment}
          profilePhoto={comment.admin ? comment.admin.profile_photo : comment.user.profile_photo}
          alignRight={comment.admin ? true : false} // Menentukan tata letak komentar berdasarkan admin atau user
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CommentList;
