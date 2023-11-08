import React from "react";

const MessageDialog = () => {
  return (
    <dialog id="msg_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Coming Soon!</h3>
        <p className="py-4">We are working on this feature.</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default MessageDialog;
