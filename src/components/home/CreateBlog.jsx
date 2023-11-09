import React, { useState } from "react";
import { useSaveBlogPostMutation } from "../../api/queries/blogPost";

const CreateBlog = ({ userEmail }) => {
  const [loading, setLoading] = useState(false);
  const [saveBlogPost] = useSaveBlogPostMutation();

  const [imgFile, setImgFile] = useState(null);

  const uploadImage = async (file) => {
    setLoading(true);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
      {
        method: "POST",
        body: file,
      }
    );
    const data = await response.json();

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const blog = e.target.blog.value;
    const date = new Date();
    const file = new FormData();
    const likes = [];
    const comments = [];
    

    file.append("file", imgFile);
    file.append("upload_preset", "heroclub");
    const pictureInfo = await uploadImage(file);

    if (pictureInfo?.secure_url) {
      await saveBlogPost({
        imagePath: pictureInfo?.secure_url,
        title,
        blog,
        date,
        likes,
        comments,
        userEmail
      });
      setLoading(false);
      window.location.reload()
    }
  };

  return (
    <div
      id="contact"
      className="text-white h-auto w-full m-auto bg-[#222222] py-20"
    >
      <h2 className="text-4xl mb-5 text-center">Create a blog</h2>
      <p className="text-xl text-center">
        Dive into your Journey of Expression and Innovation.
      </p>
      <div className="mx-auto w-11/12 lg:flex sm:block items-center">
        <form
          onSubmit={handleSubmit}
          className="xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-11/12  flex flex-col mx-auto sm:mt-10"
        >
          {/* input fields wrapper started*/}
          <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-3">
            <div>
              <label className="text-md uppercase" htmlFor="">
                Title
              </label>
              <br />
              <input
                className="w-full h-14 mt-2 outline-none border-none rounded-md bg-white text-black"
                type="text"
                name="title"
                id="name"
                required
                placeholder="Add a title"
              />
            </div>
            <div>
              <label className="text-md uppercase" htmlFor="">
                Image
              </label>
              <br />
              <input
                className="w-full h-14 mt-2 file-input"
                type="file"
                required
                id="file"
                name="file"
                placeholder="Upload an image"
                onChange={(e) => setImgFile(e.target.files[0])}
              />
            </div>
          </div>
          {/* input fields wrapper ended*/}

          <div>
            <label htmlFor="" className="text-md uppercase">
              blog
            </label>
            <br />
            <textarea
              required
              id="blog"
              name="blog"
              placeholder="What's on your mind?"
              className="w-full resize-none h-[150px] mt-2 outline-none border-none rounded-md bg-white text-black"
            />
          </div>
          {loading ? (
            <p className="text-center text-white mt-3">
              please wait! Uploading image takes longer than usual. Thank you for your patience.
            </p>
          ) : (
            <button
              type="submit"
              className="btn bg-white uppercase w-full py-3 mt-2 text-[#000944] rounded-md "
            >Submit</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
