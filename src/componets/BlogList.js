import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../componets/Card";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../componets/LoadingSpinner";
import PropTypes from "prop-types";

const BlogList = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getPost = () => {
    axios.get("https://my-json-server.typicode.com/understanding963852/deletedelete/posts").then((res) => {
      //받아온 데이터를 사용하기위해서는 .then를 사용해야하고
      //.then(함수)  //then(()=>{})
      //받아온 데이터가 res에 들어간다//response를 줄여서
      //console.log(res);
      //console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getPost();
  }, []); //빈배열일때는 한번만 실행한다

  const deleteBlog = (e, id) => {
    e.stopPropagation();
    console.log("삭제");
    axios.delete(`https://my-json-server.typicode.com/understanding963852/deletedelete/posts/${id}`).then(() => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (posts.length === 0) {
    return <div>"blog posts가 발견되지 않습니다."</div>;
  }
  return posts
    .filter((post) => {
      return isAdmin || post.publish;
    })
    .map((post) => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => {
            //console.log("실행");
            navigate(`/blogs/${post.id}`);
          }}
        >
          <div>
            {isAdmin ? (
              <button
                className="btn btn-danger"
                onClick={(e) => deleteBlog(e, post.id)}
              >
                Delete
              </button>
            ) : null}
          </div>
        </Card>
      );
    });
};
BlogList.propTypes = {
  isAdmin: PropTypes.bool,
};
BlogList.defaultProps = {
  isAdmin: false,
};
export default BlogList;
