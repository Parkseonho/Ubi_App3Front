import React, { useState, useEffect } from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import axios from 'axios';



class LikeButton extends React.Component{


    onClick = () => {
        this.state.isChecked ?
        this.setState(res.data.replyLike):
        this.setState(res.data.replyLike);
    }
    render(){
        return(
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?  
                    <HeartFilled className="btn" onClick={this.onClick}/> :
                    <HeartOutlined className="btn" onClick={this.onClick}/>}
                </div>
            </React.Fragment> 
        )
    }
}

export default LikeButton;