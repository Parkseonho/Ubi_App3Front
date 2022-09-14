import React, { useState, useEffect } from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import axios from 'axios';


const LikeButton = ({ post, setPost }) =>{
  const [like, setLike] = useState("");
    const replyLikeClick = () => {
        like? <HeartFilled/> : <HeartOutlined/>
    }

        return(
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?  
                    <HeartFilled className="btn" onClick={replyLikeClick}/> :
                    <HeartOutlined className="btn" onClick={replyLikeClick}/>}
                </div>
            </React.Fragment> 
        )

}

export default LikeButton;