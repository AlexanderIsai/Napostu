import React from 'react';
import "./LikesComments.scss"


const LikesComments = (props) => {
    const {post} = props
    return (
        <div className="likes-comments">
            <div className="div-inline"><div className="likes"/><span className="white-text">{post.likecounter}</span></div>
            <div className="div-inline"><div className="comment"/><span className="white-text">{post.comments.length}</span></div>
        </div>
    );
};



export default LikesComments;