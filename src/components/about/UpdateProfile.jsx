import React from "react";

const UpdateProfile = ({setEdit, profileData}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full pb-5 shadow-2xl bg-white border-[#000944] border-y-2"
    >
      <h2 className="mt-3 text-center text-4xl">Update Profile</h2>
      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          required
          type="text"
            defaultValue={profileData?.displayName}
          className="input input-bordered"
          name="displayName"
        />
      </div>
      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.email}
          disabled
          className="input input-bordered"
          name="email"
        />
      </div>
      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.phone}
          className="input input-bordered"
          name="phone"
        />
      </div>

      {/* <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Add photo URL</span>
        </label>
        <input type="text" className="input input-bordered" name="photo" />
      </div> */}

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Full Address</span>
        </label>
        <textarea
            defaultValue={profileData?.address}
          className="input input-bordered"
          name="address"
        />
      </div>

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Secondary School</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.secondarySchool}
          className="input input-bordered"
          name="secondarySchool"
        />
      </div>

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">High School</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.highSchool}
          className="input input-bordered"
          name="highSchool"
        />
      </div>

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">College</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.college}
          className="input input-bordered"
          name="college"
        />
      </div>

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">University</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.varsity}
          className="input input-bordered"
          name="varsity"
        />
      </div>

      <div className="form-control mt-2 mx-auto w-11/12">
        <label className="label">
          <span className="label-text">Workplace</span>
        </label>
        <input
          type="text"
            defaultValue={profileData?.workplace}
          className="input input-bordered"
          name="workplace"
        />
      </div>

      <div className="w-11/12 mx-auto">
        <button
          type="submit"
          className="w-full h-10 mt-5  bg-[#222] hover:shadow-xl text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UpdateProfile;
