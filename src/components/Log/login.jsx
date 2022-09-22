import ubi from '../picture/ubi.png';
import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedState, userState } from "../recoil";
import { Buffer } from "buffer";

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setAuthenticated = useSetRecoilState(authenticatedState);
    const setUserInfo = useSetRecoilState(userState);
    const onChangeIdInput = (e) => {
      setEmail(e.target.value);
    };
    const onChnagePasswordInput = (e) => {
      setPassword(e.target.value);
    };
  
    const doLogin = async (e) => {
      e.preventDefault();
      try {
        const data = await axios({
          method: "post",
          url: `http://localhost:8083/login`,
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
          setUserInfo({ id: payload.id, username: payload.username });
  
          setAuthenticated(true);
          localStorage.setItem("login-token", data.headers.authorization);
          if (location.pathname === "/login") return navigate("/");
        }
      } catch (e) {
        console.log(e);
        alert("로그인 실패");
      }
    };
    return  <>
    <div>
        <img src={ubi} alt="ubi" className='absolute inset-x-0 mx-auto  top-0 h-14 w-12' />
    </div>
    <form
        onSubmit={doLogin}
    >
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
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
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
              
            </div>
            <button type="submit" className="btn ">로그인</button>
        </div>
    </form>
    <div className="grid place-content-center">
    <span>회원이 아니신가요?   <Link to="/Join" className="text-sky-300 font-bold">회원가입</Link></span> 
    </div>
</>
};

export default Login;