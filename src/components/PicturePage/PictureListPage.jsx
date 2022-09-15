import "../../index.css"
import "../../picture.css"
import PictureListPost from "./PictureListPost";
import React from "react";

const PictureListPage = ({ posts, setPosts }) => {
  return (
    <>
      <div className="absolute inset-x-0 top-0">
        <strong>게시물</strong>
      </div>
      <div className="PageHeight overflow-auto ">
        
            {posts&&posts.map((post, index) => (
            <PictureListPost
            key = {index}
            post = {post}
            setPosts={setPosts}
            />
          ))}
         
      
      </div>
    </>
  );
};

export default PictureListPage;
