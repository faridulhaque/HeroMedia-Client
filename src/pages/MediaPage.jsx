import React from "react";
import { auth } from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../components/shared/Navbar";
import Media from "../components/home/Media";
import MediaFrame from "../components/media/MediaFrame";

const MediaPage = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Navbar userEmail={user?.email}></Navbar>
      <div className="h-20"></div>
      <MediaFrame></MediaFrame>
      <MediaFrame></MediaFrame>
      <MediaFrame></MediaFrame>
    </>
  );
};

export default MediaPage;
