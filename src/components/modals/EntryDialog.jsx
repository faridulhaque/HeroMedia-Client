import React, { useState } from "react";
import SignUP from "../entry/SignUP";
import SignIN from "../entry/SignIN";

const EntryDialog = () => {
  const [registerPage, setRegisterPage] = useState(true);

  return (
    <dialog id="entry_modal" className="modal">
      <div className="modal-box relative">
        <h3 className="font-bold text-xl text-center">
          {registerPage ? "Sign Up Now" : " Sign In Here"}
        </h3>

        {registerPage ? (
          <SignUP setRegisterPage={setRegisterPage}> </SignUP>
        ) : (
          <SignIN setRegisterPage={setRegisterPage}></SignIN>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button 
            // onClick={()=>window.location.reload()} 
            className="btn btn-default absolute top-3 right-3">
              X
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EntryDialog;
