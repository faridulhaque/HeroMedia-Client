import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const BlogPage = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar userEmail={user?.email}></Navbar>
      <Footer></Footer>
    </>
  );
};

export default BlogPage;
