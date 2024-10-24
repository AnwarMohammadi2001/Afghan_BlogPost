import React, { useContext } from "react";
import { contextStore } from "../Context/ContextProvider";

const TopAuthor = () => {
  const posts = useContext(contextStore);
  return (
    <div className="grid grid-cols-4">
      {posts.map((post) => (
        <li>
          <img src={post.authorimage} className="h-20 w-20" />
          <span>{post.title}</span>
          <span>{post.date}</span>
        </li>
      ))}
    </div>
  );
};

export default TopAuthor;
