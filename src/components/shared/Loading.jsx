import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center">
      <FadeLoader className="text-4xl" color={"#4A8CB3"}></FadeLoader>
    </div>
  );
};

export default Loading;
