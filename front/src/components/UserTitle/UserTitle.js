import React from 'react';
import "./UserTitle.scss"


const UserTitle = (props) => {
    const {click} = props
    return (
        <div className="user-title">
            <span className="space50" onClick={click}>ДОПИСИ</span>
            <span className="space50" onClick={click}>ПОЗНАЧЕНО</span>
        </div>
    );
};

export default UserTitle;
