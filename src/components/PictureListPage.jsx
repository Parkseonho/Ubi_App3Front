import "../index.css"
import "../picture.css"
import threedots from "../components/picture/threedots.png";
import ggosom1 from "../components/picture/ggosom1.jpg";
import noheart from "../components/picture/noHeart.png"
import heart from "../components/picture/heart.png";
import PictureListPost from "./PictureListPost";
import React, {useState, useEffect} from "react";

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
