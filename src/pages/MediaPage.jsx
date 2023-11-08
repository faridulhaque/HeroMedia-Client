import React from "react";
import { auth } from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/shared/Navbar";
import MediaFrame from "../components/media/MediaFrame";
import { useGetAllBlogsQuery } from "../api/queries/blogPost";

const MediaPage = () => {
  const [user, loading] = useAuthState(auth);

  const { data: blogs, isLoading } = useGetAllBlogsQuery();

  if (isLoading) {
    <></>;
  }

  const sortedBlogs = blogs ? [...blogs].sort((a, b) => new Date(b?.date) - new Date(a?.date)) : [];

  return (
    <>
      <Navbar userEmail={user?.email}></Navbar>
      <div className="h-20"></div>
      {sortedBlogs?.map((blog) => (
        <MediaFrame key={blog?._id} blog={blog}>
          {" "}
        </MediaFrame>
      ))}
    </>
  );
};

export default MediaPage;
