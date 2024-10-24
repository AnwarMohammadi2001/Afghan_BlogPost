import React from "react";
import { postItem } from "../data/Posts";
import AllPost from "../components/AllPost";
import SearchFilter from "../components/SearchFilter";
import TopAuthor from "../components/TopAuthor";

const Home = () => {
  return (
    <div className=" w-full min-h-fit py-5">
      <div>
        <SearchFilter />
      </div>
      <div className="container m-auto flex flex-col lg:grid grid-cols-3 gap-5">
        {postItem.map((post) => (
          <div>
            <AllPost post={post} />
          </div>
        ))}
      </div>
      <div>
        <TopAuthor />
      </div>
    </div>
  );
};

export default Home;
