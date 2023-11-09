import React from "react";
import UpdateProfile from "../about/UpdateProfile";

const UpdateModal = ({setEdit, profileData}) => {
  return (
    <dialog id="update_modal" className="modal">
      <div className="modal-box">
        <UpdateProfile setEdit={setEdit} profileData={profileData}></UpdateProfile>
      </div>
    </dialog>
  );
};

export default UpdateModal;
