import React, { useState } from 'react';
import CommentList from '../../components/Berita/commentList';
import CommentInput from '../../components/Berita/commentInput';

const Comment = () => {
    const [comments, setComments] = useState([
        { username: 'amyrobson', time: '1 mg', text: 'betul, kemarin saya lewat situ. masa sampai sekarang belum di tangani sih.' },
    ]);

    const addComment = (text) => {
        setComments([...comments, { username: 'currentuser', time: 'baru saja', text }]);
    };

    const deleteComment = (index) => {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    };

    return (
        <div className="lg:w-6/12">
            <CommentList comments={comments} deleteComment={deleteComment} />
            <CommentInput addComment={addComment} />
        </div>
    );
};

export default Comment;
