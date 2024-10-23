import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const ReviewPost = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
    // Additional functionality for commenting can be implemented here.
  };

  const handleShare = () => {
    // Logic for sharing the post can be added here.
    alert("Post shared!");
  };

  return (
    <div className="flex justify-between items-center p-3 bg-white  dark:bg-gray-800 transition-all duration-300">
      <button
        onClick={handleLike}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
      >
        <FaThumbsUp className="text-lg" />
        <span>{likes} Likes</span>
      </button>

      <button
        onClick={handleComment}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
      >
        <FaComment className="text-lg" />
        <span>{comments} Comments</span>
      </button>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
      >
        <FaShareAlt className="text-lg" />
        <span>Share Post</span>
      </button>
    </div>
  );
};

export default ReviewPost;
