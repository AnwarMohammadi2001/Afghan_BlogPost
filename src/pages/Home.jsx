import React from "react";
import { postItem } from "../data/Posts";
import AllPost from "../components/AllPost";
import SearchFilter from "../components/SearchFilter";

const Home = () => {
  return (
    <div className=" w-full min-h-fit  pt-10">
      <div>
        <SearchFilter />
      </div>
      <div className="container m-auto flex flex-col lg:grid grid-cols-3 gap-5">
        {postItem.map((post) => (
          <AllPost post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
