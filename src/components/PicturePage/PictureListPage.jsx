import "../../index.css"
import "../../picture.css"
import PictureListPost from "./PictureListPost";
import React from "react";

const PictureListPage = ({ posts, setPosts }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#CCF2F4",
          height: 60

        }} >
        <strong>게시물</strong>
      </div>
      <div className="PageHeight overflow-auto">
        
            {posts&&posts.map((post, index) => (
            <PictureListPost
            key = {index}
            post = {post}
            />
          ))}
         
      
      </div>
    </>
  );
};

export default PictureListPage;
