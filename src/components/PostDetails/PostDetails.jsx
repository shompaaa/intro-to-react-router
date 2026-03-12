import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    return (
        <div>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;