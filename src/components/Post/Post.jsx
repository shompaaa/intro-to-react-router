import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <div style={{ border: "2px solid red", marginBottom: "10px", borderRadius:"10px" }}>
      <p>{title}</p>
      <Link to={`/posts/${id}`}><button>Show Details</button></Link>
      <button onClick={handleNavigate}>{`Show-${id} Details`}</button>
    </div>
  );
};

export default Post;
