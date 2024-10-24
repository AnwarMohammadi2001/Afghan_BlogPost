import React from "react";
import Navpost from "./Navpost";
import ReviewPost from "./ReviewPost";

const AllPost = ({ post }) => {
  return (
    <div className="max-w-md mx-auto my-4 mt-10 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col h-[400px]">
        <div className="flex-grow">
          <div className="py-2">
            <Navpost post={post} />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              By <span className="font-bold">{post.author} </span>on{" "}
              <span className="font-semibold">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-indigo-200 dark:bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-100 mr-2 mb-2"
              >
                #{tag}
              </span>
            ))}
          </div>
          <ReviewPost />
        </div>
      </div>
    </div>
  );
};

export default AllPost;
