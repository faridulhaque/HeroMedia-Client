import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import BlogContainer from "../components/blog/BlogContainer";

const BlogPage = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar userEmail={user?.email}></Navbar>
      <div className="h-20"></div>
      <BlogContainer></BlogContainer>
      <div className="h-20"></div>
      <Footer></Footer>
    </>
  );
};

export default BlogPage;
