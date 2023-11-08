import React from "react";

const MediaFrame = () => {
  return (
    <div className="card lg:card-side bg-[#222222] shadow-xl lg:w-2/4 sm:11/12 mx-auto my-5">
      <figure className="w-2/4">
        <img
          src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
          className="h-auto"
        />
      </figure>
      <div className="card-body w-2/4">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default MediaFrame;
