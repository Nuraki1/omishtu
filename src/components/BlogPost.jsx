import React, { useState } from "react";
import BlogLIst from "./BlogLIst";

function BlogPost() {
  const [blog, setBlog] = useState([
    {
      id: 1,
      company: "Hulu Technologies",
      name: "akrem",
      profession: "software developer",
    },
    {
      id: 2,
      company: "Omishtu Technologies",
      name: "abdiwak",
      profession: "software developer",
    },
    {
      id: 3,
      company: "Menab Technologies",
      name: "Ermiyas",
      profession: "fullstack dev",
    },
    {
      id: 4,
      company: "Aya software solution",
      name: "akrem",
      profession: "software developer",
    },
  ]);
  return (
    <>
      <div>
        <h1>Blog Post</h1>
      </div>
      <BlogLIst blog={blog} title="all companies" />
      <BlogLIst
        blog={blog.filter((blog) => blog.name === "akrem")}
        title="Akrem's companies"
      />
    </>
  );
}

export default BlogPost;
