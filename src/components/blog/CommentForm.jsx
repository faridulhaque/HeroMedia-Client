import React, { useState } from "react";
import { useSaveCommentMutation } from "../../api/queries/blogPost";

const CommentForm = ({ userEmail, postId }) => {
  const [comment, setComment] = useState("");

  const [saveComment, {isLoading}] = useSaveCommentMutation()

  const makeComment = async () => {
    const data = {
        comment: comment,
        userEmail: userEmail,
        postId
    }
    await saveComment(data)
    document.getElementById("comment_form").value = "";
    

  };

  return (
    <div className="w-full flex items-center my-4">
      <textarea
      id="comment_form"
        onChange={(e) => setComment(e.target.value)}
        className="w-4/5 border-2 border-black h-16 resize-none rounded-md bg-white text-black"
        placeholder="Add a comment about this post"
      ></textarea>

      <button

        disabled={!comment}
        onClick={() => makeComment()}
        className="h-16 w-1/5 text-white bg-black hover:bg-black btn"
      >
        {isLoading ? "Posting" : "Post"}
      </button>
    </div>
  );
};

export default CommentForm;
