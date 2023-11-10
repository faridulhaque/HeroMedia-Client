import React, { useMemo, useState } from "react";
import MediaCard from "./MediaCard";
import { useGetAllBlogsQuery } from "../../api/queries/blogPost";
import Loading from "../shared/Loading";

const Media = ({ userEmail }) => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery();

  // const sortedBlogs = blogs.sort((a, b) => {
  //   return b.likes.length - a.likes.length;
  // });

  if(isLoading) return <Loading></Loading>
  const sortedBlogs = blogs ? [...blogs].sort((a, b) => b?.likes?.length - a?.likes?.length) : [];

  return (
    <div id="blog" className="h-auto w-full m-auto bg-base-100 py-10">
      <h2 className="w-11/12 m-auto text-5xl text-[#7A283A] my-10">Top 3 For You</h2>
      <div className="w-11/12 m-auto grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
        {[...sortedBlogs.slice(0, 3)]?.map((blog) => (
          <MediaCard
            key={blog?._id}
            userEmail={userEmail}
            blog={blog}
          ></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
