import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const ShowPage = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPosts = (id) => {
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log(res);
      setPost(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getPosts(id);
  }, [id]);

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <h1 className="flex-grow-1">{post.title}</h1>
        <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>
          Edit
        </Link>
      </div>
      <small className="text-muted">
        Created At : {printDate(post.createdAt)}
      </small>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default ShowPage;
