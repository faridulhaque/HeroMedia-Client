import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import Navbar from "../components/shared/Navbar";
import MainProfile from "../components/about/MainProfile";
import UpdateProfile from "../components/about/UpdateProfile";
import Footer from "../components/shared/Footer";
import { useGetUserProfileQuery } from "../api/queries/aboutApi";

const AboutPage = () => {
  const [user, loading] = useAuthState(auth);

  const [edit, setEdit] = useState(false);

  const { data: profileData, isLoading } = useGetUserProfileQuery(
      user?.email
    );

  return (
    <>
      <Navbar userEmail={user?.email}></Navbar>
      <div className="mt-20 w-2/5 mx-auto">
        {!edit ? (
          <MainProfile
            setEdit={setEdit}
            profileData={profileData}
          ></MainProfile>
        ) : (
          <UpdateProfile
            profileData= {profileData}
            setEdit={setEdit}
          ></UpdateProfile>
        )}
      </div>
      <div className="py-5"></div>
      <Footer></Footer>
    </>
  );
};

export default AboutPage;
