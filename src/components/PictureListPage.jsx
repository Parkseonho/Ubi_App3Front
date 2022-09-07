import "../index.css"
import "../picture.css"
import threedots from "../components/picture/threedots.png";
import ggosom1 from "../components/picture/ggosom1.jpg";
import noheart from "../components/picture/noHeart.png"
import heart from "../components/picture/heart.png";
import PictureListPost from "./PictureListPost";
import React, {useState, useEffect} from "react";

const PictureListPage = ({ post, like, onCilck }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#CCF2F4",
          height: 60

        }} >
        <strong>게시물</strong>
      </div>
      <div className="PageHeight">
        <div className="border PicturePostSize" >
          {/* 게시물 상단 */}
          <div className="border tabs place-content-between py-2 ">
            <nav className="tabs ml-2">
              <img className="mask mask-circle h-14 w-14" src="https://placeimg.com/160/160/arch" />
              <p>우비</p>
            </nav>
            <button className="my-auto btn glass mr-5">
              <img src={threedots} alt="threedots" className='h-7 w-2 my-auto' />
            </button>
          </div>
          {/* 게시물 사진부분 */}
          <div className="border PicturePostImgSize" >
            <img src={ggosom1} alt="ggosom1" className='mx-auto pb-0.5 PicturePostImgSize ' />
          </div>
          {/* 게시물 내용 */}
          <div >
              <img src={like?heart:noheart} alt="heart" className="block ml-auto m-3" />
            <div className="mx-3">
            {post&&post.map((content) => (
            <PictureListPost
            content={content}
            />
          ))}
           
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureListPage;
