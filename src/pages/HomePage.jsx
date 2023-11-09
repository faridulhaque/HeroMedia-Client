import React from "react";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/home/Banner";
import Media from "../components/home/Media";
import CreateBlog from "../components/home/CreateBlog";
import Footer from "../components/shared/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const HomePage = () => {

  const [user, loading] = useAuthState(auth);


  return (
    <>
      <Banner userEmail={user?.email}></Banner>
      <CreateBlog userEmail={user?.email}></CreateBlog>
      <Media userEmail= {user?.email}></Media>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
