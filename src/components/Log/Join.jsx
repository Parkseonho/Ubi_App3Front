import axios from "axios";
import React from "react";
import { useState } from "react";
import ubi from '../picture/ubi.png';


const Join = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    
    return (
        <>
            <div>
                <img src={ubi} alt="ubi" className='absolute inset-x-0 mx-auto  top-0 h-14 w-12' />
            </div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    alert("완료");
                    const data = await axios({
                        url: "http://localhost:8083/join",
                        method: "POST",
                        data: {
                            username,
                            email,
                            password,
                            phone,
                            content,
                        },
                    });
                    setContent("");
                    setEmail("");
                    setPassword("");
                    setPhone("");
                    setUsername("");
                    console.log(data);

                }}
            >
                <div className="grid place-content-center">
                    <div className=" grid place-content-center bg-teal-100 py-2 w-80 rounded-2xl" >
                        <strong>사용자 정보</strong>
                        <div>
                            <label className="label">
                                <span className="label-text">이름</span>
                            </label>
                            <input
                                type="text"
                                placeholder="이름 입력"
                                className="input input-bordered w-full max-w-xs"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">이메일</span>
                            </label>
                            <input
                                type="email"
                                placeholder="이메일 입력"
                                className="input input-bordered w-full max-w-xs"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">PW</span>
                            </label>
                            <input
                                type="password"
                                placeholder="PW 입력"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        {/*
                    <div>
                        <label className="label">
                            <span className="label-text">PW 확인</span>
                        </label>
                        <input type="password" placeholder="PW 확인" className="input input-bordered w-full max-w-xs" />
                    </div>
                    */}
                        <div>
                            <label className="label">
                                <span className="label-text">전화번호</span>
                            </label>
                            <input 
                            type="tel" 
                            placeholder="전화번호 입력" 
                            className="input input-bordered w-full max-w-xs" 
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">소개</span>
                            </label>
                            <textarea 
                            type="text" 
                            placeholder="소개 입력" 
                            className="input input-bordered w-full max-w-xs" 
                            value={content}
                            onChange={(e) => {
                                setContent(e.target.value);
                            }}
                            />
                        </div>

                    </div>
                </div>
                <button type="submit" className="btn bottom-16 right-5 absolute ">확인</button>
            </form>
        </>
    );
};

export default Join;