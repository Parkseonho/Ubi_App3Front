import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedState, userState } from "../recoil";
import ubi from '../picture/ubi.png';
import { Link } from 'react-router-dom';
import Join from "./Join"; import {
    GoogleLogin,
    googleLogout,
    GoogleOAuthProvider,
} from "@react-oauth/google";


import { Buffer } from "buffer";

const responseGoogle = (response) => {
    console.log("response", response);
}

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setAuthenticated = useSetRecoilState(authenticatedState);
    const setUseInfo = useSetRecoilState(userState);
    const onChangeIdInput = (e) => {
        setEmail(e.target.value);
    }
    const onChangePasswordInput = (e) => {
        setPassword(e.target.value);
    }

    const doLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await axios({
                method: "post",
                url: 'http://localhost:8083/login',
                data: {
                    email,
                    password,
                },
            });

            if (data.headers.authorization) {
                const jwtToken = data.headers.authorization;
                const payload = JSON.parse(
                    Buffer.from(jwtToken.split(" ")[1].split(".")[1], "base64").toString(
                        "ascii"
                    )
                );
                console.log(payload);
                console.log(payload.id);
                setUseInfo({ id: payload.id, username: payload.username });

                setAuthenticated(true);
                localStorage.setItem("login-token", data.headers.authorization);
                if (location.pathname === "/login") return navigate("/");
            }
        } catch (e) {
            console.log(e);
            alert("로그인 실패");
        }
    };
    return <>
        <div>
            <img src={ubi} alt="ubi" className='absolute inset-x-0 mx-auto  top-0 h-14 w-12' />
        </div>
        <div>
            <form onSubmit={doLogin}>

                <div className="grid place-content-center content-center my-auto">
                    <div>

                        <div className="mb-6">
                            <label className="label">
                                <strong className="label-text">이메일</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="이메일 입력"
                                className="input input-bordered w-full max-w-xs"
                                value={email}
                                onChange={onChangeIdInput}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="label">
                                <strong className="label-text">PW</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="PW 입력"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={onChangePasswordInput}
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn mb-3">로그인</button>
                </div>
            </form>
        </div>
        <div className="grid place-content-center">
            <span>회원이 아니신가요?   <Link to="/Join" className="text-sky-300 font-bold">회원가입</Link></span>
        </div>
        <div className="">
            <GoogleOAuthProvider clientId="783164907876-44457lrh2o4ggner2rq66vffdechevng.apps.googleusercontent.com">
                <GoogleLogin
                type="icon"
                size="large"
                shape="square"
                onSuccess={responseGoogle}
                onError={responseGoogle}
                useOneTap
                />
            </GoogleOAuthProvider>
            <button
            onClick={()=>{
                googleLogout();
            }}>logout</button>
        </div>

    </>
};

export default Login;