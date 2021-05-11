import React from 'react';
import "./Avatar.scss"

const Avatar = (props) => {
    const {url} = props
    return (
        <div className="avatar">
            <img className="avatar-img" src={url} alt="beard"/>
        </div>
    );
};

export default Avatar;