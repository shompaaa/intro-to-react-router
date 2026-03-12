import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {name,email,phone,id} = user;

    const userStyle = {
        border: '2px solid green',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px'
    }


    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>E-mail: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;