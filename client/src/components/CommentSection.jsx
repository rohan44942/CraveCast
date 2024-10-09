import React, { useState } from "react";
import { FaComment, FaTimes } from "react-icons/fa";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="text-gray-300 hover:text-gray-400" onClick={toggleComments}>
        <FaComment size={35} /> 
      </button>

      {isOpen && (
        <div className="mt-2 p-2 rounded-md bg-white  shadow-lg w-[100%] mx-auto">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-black">Comments</h3>
            <button className="text-gray-400" onClick={toggleComments}>
              <FaTimes size={20} />
            </button>
          </div>

          <form onSubmit={handleCommentSubmit} className="mt-2">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="border p-2 rounded w-full text-black"
            />
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded mt-1">Submit</button>
          </form>

          <div className="mt-2 max-h-40 overflow-y-auto">
            {comments.map((c, index) => (
              <div key={index} className="py-1 text-black">
                {c}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
