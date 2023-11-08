import React, { useMemo, useState } from "react";
import MediaCard from "./MediaCard";

const Media = ({userEmail}) => {
  const [blogs, setBlogs] = useState([]);

  useMemo(() => {
    fetch(
      "https://raw.githubusercontent.com/faridulhaque/faridulhaque/main/portfolio_4/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div id="blog" className="h-auto w-full m-auto bg-base-100 py-10">
      <h2 className="w-11/12 m-auto text-5xl text-[#7A283A] my-10">Media</h2>
      <div className="w-11/12 m-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
        {blogs.map((blog) => (
       <MediaCard key={blog.title} userEmail={userEmail} blog={blog}></MediaCard>
       ))}
      </div>
    </div>
  );
};

export default Media;
