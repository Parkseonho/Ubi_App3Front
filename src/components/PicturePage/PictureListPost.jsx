import React from "react";
import threedots from "../picture/threedots.png";
import ggosom1 from "../picture/ggosom1.jpg";
import axios from "axios";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';


const PictureListPost = ({ post, setPost }) => {
    const { content, replyLike, id } = post;

    
    const replyLikeClick = () => {
        const data = axios({
            url: 'http://localhost:8083/multi-file/${id}',
            method: "PATCH",
        });
        replyLike?setPost(!data.replyLike):setPost(!data.replyLike);
       

    }
   
    return (
        <React.Fragment>
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
                    <div>
                        {replyLike ? 
                        <HeartFilled 
                        onClick={replyLikeClick} /> : 
                        <HeartOutlined 
                        onClick={replyLikeClick} />}
                    </div>

                    <div className="mx-3">

                    </div>
                    {content}

                </div>
            </div>




        </React.Fragment>

    );
};

export default PictureListPost;