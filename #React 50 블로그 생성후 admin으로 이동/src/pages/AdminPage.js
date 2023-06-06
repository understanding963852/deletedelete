import React from "react";
import { Link } from "react-router-dom";
import BlogList from "../componets/BlogList";

const AdminPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Admin</h1>
        <Link to="/blogs/create" className="btn btn-success">
          Create New
        </Link>
      </div>
      <BlogList isAdmin={true} />
    </div>
  );
};

export default AdminPage;
