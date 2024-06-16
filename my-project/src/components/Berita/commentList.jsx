import React from 'react';
import Comment from './comment';

const CommentList = ({ comments, deleteComment }) => {
    return (
        <div className="bg-white rounded-t-2xl rounded">
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    username={comment.username}
                    time={comment.time}
                    text={comment.text}
                    onDelete={() => deleteComment(index)}
                />
            ))}
        </div>
    );
};

export default CommentList;
