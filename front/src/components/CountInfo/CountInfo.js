import React from 'react';

const CountInfo = (props) => {
    const {count, title} = props
    return (
        <div>
            <span>{count + title}</span>
        </div>
    );
};

export default CountInfo;