import React, { useState } from 'react';
import CommentList from '../../components/Berita/commentList';
import CommentInput from '../../components/Berita/commentInput';

const Comment = () => {

    return (
        <div className="lg:w-6/12">
            <CommentList  />
            <CommentInput />
        </div>
    );
};

export default Comment;
