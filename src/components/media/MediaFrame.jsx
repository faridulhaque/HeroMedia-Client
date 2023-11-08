import React from "react";
import { useGetUserProfileQuery } from "../../api/queries/aboutApi";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const MediaFrame = ({ blog }) => {
  const { data: profileData, isLoading } = useGetUserProfileQuery(
    blog?.userEmail
  );

  return (
    <div className="card lg:card-side bg-base-200 shadow-xl lg:w-2/4 sm:11/12 mx-auto my-5">
      <figure className="lg:w-2/4 sm:4/5">
        <img src={blog?.imagePath} alt="Album" className="w-full h-full" />
      </figure>
      <div className="card-body lg:w-2/4 sm:4/5">
        <h2 className="card-title">{blog?.title}</h2>
        <p className="text-sm">
          {moment(profileData?.date).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <p className="text-lg">By {profileData?.displayName}</p>

        <p>
          {blog?.blog?.slice(0, 150) + "... "}
          <Link className="link text-blue-300" to={`/blog/${blog?._id}`}>
            See More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MediaFrame;
