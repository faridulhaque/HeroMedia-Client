import React from "react";
import { useGetUserProfileQuery } from "../../api/queries/aboutApi";
import { useGetCommentatorProfileQuery } from "../../api/queries/blogPost";

const DisplayComments = (comment) => {
  const userEmail = comment?.comment?.userEmail;

  const { data: commentator, isLoading } =
    useGetCommentatorProfileQuery(userEmail);
  if (isLoading) <></>;
  return (
    <div className="mt-3 border-t-2 border-stale-500 h-auto">
      <div className="flex mt-2 min-h-16 items-center">
        <div className="h-14 w-[50px]">
          <img
            className="w-full h-full rounded-full"
            src="https://i.ibb.co/6YK1cXs/avatar.jpg"
            alt=""
          />
        </div>
        <h2 className="text-xl text-black ml-3">{commentator?.displayName}</h2>
      </div>
      <p className="mt-2 text-md">
        {comment?.comment?.comment}
      </p>
    </div>
  );
};

export default DisplayComments;
