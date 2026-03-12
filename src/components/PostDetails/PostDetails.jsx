import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    return (
        <div>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </div>
    );
};

export default PostDetails;