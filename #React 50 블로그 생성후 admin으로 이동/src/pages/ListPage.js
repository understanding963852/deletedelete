import React from "react";
import BlogList from "../componets/BlogList";

const ListPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Blogs</h1>
      </div>
      <BlogList isAdmin={false} />
    </div>
  );
};

export default ListPage;
