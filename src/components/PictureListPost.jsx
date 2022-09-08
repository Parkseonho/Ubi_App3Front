import React from "react";
import heart from "../components/picture/heart.png";
import threedots from "../components/picture/threedots.png";
import ggosom1 from "../components/picture/ggosom1.jpg";

const PictureListPost = ({ post }) => {
    const { content } = post;
    return (
        <>
            <div className="border PicturePostSize my-2" >
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
                    <img src={heart} alt="heart" className="block ml-auto m-3" />
                    <div className="mx-3">
                    </div>
                    {content}

                </div>
            </div>




        </>

    );
};

export default PictureListPost;