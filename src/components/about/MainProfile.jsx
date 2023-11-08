import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const MainProfile = ({ setEdit, profileData }) => {
  return (
    <div className="w-full pb-5 shadow-2xl">
      <div className="w-full h-36 bg-[#222222] mb-20 relative">
        <img
          className="w-36 h-36 absolute left-5 top-[40%]"
          src="https://i.ibb.co/6YK1cXs/avatar.jpg"
          width={150}
          height={150}
          alt="avatar"
        ></img>
      </div>
      <div className="text-[#222] flex items-center justify-between w-11/12 mx-auto">
        <ul className="flex flex-col">
          <li className="w-full h-10 font-bold text-lg">Name:</li>
          <li className="w-full h-10 font-bold text-lg">Email:</li>
          <li className="w-full h-10 font-bold text-lg">Phone:</li>
        </ul>

        <ul className="flex flex-col">
          <li className="w-full h-10 text-lg">{profileData?.displayName}</li>
          <li className="w-full h-10 text-lg">
            {profileData?.email ? profileData?.email : "Not added yet"}
          </li>
          <li className="w-full h-10 text-lg">
            {profileData?.phone ? profileData?.phone : "Not added yet"}
          </li>
        </ul>
      </div>

      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">Address</h3>
        <p className="text-xl my-2">
          {profileData?.address ? profileData?.address : "Not added yet"}
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">Secondary School</h3>
        <p className="text-xl my-2">
          {profileData?.secondarySchool
            ? profileData?.secondarySchool
            : "Not added yet"}
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">High School</h3>
        <p className="text-xl my-2">
          {profileData?.highSchool ? profileData?.highSchool : "Not added yet"}
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">College </h3>
        <p className="text-xl my-2">{profileData?.college ? profileData?.college : "Not added yet"}</p>
      </div>
      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">University </h3>
        <p className="text-xl my-2">{profileData?.varsity ? profileData?.varsity : "Not added yet"}</p>
      </div>
      <div className="w-11/12 mx-auto">
        <h3 className="text-xl font-bold">WorkPlace </h3>
        <p className="text-xl my-2">{profileData?.workplace ? profileData?.workplace : "Not added yet"}</p>
      </div>

      <div className="w-11/12 mx-auto">
        <button
          onClick={() => setEdit(true)}
          className="w-full h-10 mt-5  bg-[#222222] hover:shadow-xl text-white"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MainProfile;
