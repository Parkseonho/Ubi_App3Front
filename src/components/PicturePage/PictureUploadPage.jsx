import React, { useState } from "react";
import "../../index.css"
import axios from "axios";
import { Link } from 'react-router-dom';

const PictureUploadPage = ({ post, setPost, nextId }) => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  return (
    <>
      <div>
        <strong className="absolute inset-x-0 top-0"> 사진 업로드 </strong>
      </div>

      {/* 내용 */}
      <div className="PageHeight py-auto">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = await axios({
              url: "http://localhost:8083/multi-file",
              method: "POST",
              enctyp: "multipart/form-data",
              data: {
                content,
                files
              },
            });
            setPost(data.content, data.files);
            nextId.current++;
            setContent("");
            setFiles([]);
          }}
        >
          {/* 사진/영상 업로드 부분 */}

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <strong class="label-text">사진/영상</strong>
            </label>
            <input
              multiple="multiple"
              type="file"
              className="form-control"
              value={files}
              onChange={(e) => {
                setFiles(e.target.value);
              }}
            ></input>
          </div>

          {/* 내용 업로드 부분 */}
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <strong class="label-text">내용</strong>
            </label>
            <input
              type="text"
              placeholder="내용"
              class="input input-bordered w-full "
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            >
            </input>
          </div>
          {/* 확인/취소 버튼 */}
          <div>
            <Link to="/PictureMain" >
              <button class="btn mr-2">취소</button>
            </Link>
            <Link to="/PictureList" >
              <button onClick="onSubmit" type="submit" class="btn">확인</button>
            </Link>
          </div>
        </form>
      </div>

    </>
  );
};

export default PictureUploadPage;
