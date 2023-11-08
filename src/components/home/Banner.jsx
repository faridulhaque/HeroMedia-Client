import React from "react";
import Navbar from "../shared/Navbar";
import EntryDialog from "../modals/EntryDialog";

const Banner = ({userEmail}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/s3T99Pg/top-view-desk-concept-with-coffee.jpg)",
      }}
    >
      <Navbar userEmail={userEmail}></Navbar>

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-white text-lg">
            Exploring passions through code, books, melodies, and chess moves.
            Join me on this journey of discovery and creativity!
          </p>

          {
            !userEmail &&  <button
            onClick={() => document.getElementById("entry_modal").showModal()}
            className="btn"
          >
            Get Started
          </button>
          }
         
        </div>
      </div>
      <EntryDialog></EntryDialog>
    </div>
  );
};

export default Banner;
