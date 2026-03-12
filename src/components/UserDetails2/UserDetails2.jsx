import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise)
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
        </div>
    );
};

export default UserDetails2;