import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MediaCard = ({blog, userEmail}) => {
  const navigate = useNavigate()
  const handleNavigate = (id)=>{
      if(!userEmail){
        document.getElementById("entry_modal").showModal()
      }
      else{
        navigate(`/blog/${id}`)
      }
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="bg-[#222222] text-white group w-full h-[650px] overflow-hidden relative shadow-2xl"
    >
      <img className="h-2/4 w-full" src={blog?.imagePath} alt="" />
      <h2 className="text-2xl my-4 mx-3 text-white">{blog?.title}</h2>
      <h2 className="text-sm my-4 mx-3 text-blue-500">{blog?.likes?.length} Likes</h2>

      <p className="text-md mx-3 text-justify">{blog?.blog?.slice(0, 200) + `...`}</p>

      <button
        onClick={()=>handleNavigate(blog?._id)}
        target="_blank"
        className="absolute btn bg-white text-black xl:px-5 lg:px-5 md:px-4 sm:px-4 xs:px-3 xxs:px-3 xl:py-3 lg:py-3 md:py-2 sm:py-2 xs:py-1 xxs:py-1 rounded-md bottom-5 left-3"
      >
        Read More
      </button>
    </div>
  );
};

export default MediaCard;
