import React from 'react';
import "./LikesComments.scss"


const LikesComments = () => {
    return (
        <div className="likes-comments">
            <div className="div-inline"><div className="likes"/><span className="white-text">154</span></div>
            <div className="div-inline"><div className="comment"/><span className="white-text">22</span></div>
        </div>
    );
};

export default LikesComments;