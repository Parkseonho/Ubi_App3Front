import React, { useState } from "react";
import "../index.css"
import axios from "axios";

const PictureUploadPage = ({ post, setPost, nextId}) => {
  const [content, setContent] = useState("");
  return (
    <>
      <div
        style={{
          backgroundColor: "#CCF2F4",
          height: 60

        }} >
        <strong> 사진 업로드 </strong>
      </div>

      {/* 내용 */}
      <div className="PageHeight py-auto">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const data = await axios({
              url: "http://localhost:8083/multi-file",
              method: "POST",
              data: { content },
            });
            setPost(data.content);
            nextId.current++;
            setContent("");
          }}          
        >
          {/* 사진/영상 업로드 부분 */}
          {/*
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <strong class="label-text">사진/영상</strong>
            </label>
            <input type="file"
              className="form-control"
              value={files}
              onChange={(e) => {
                setFiles(e.target.value);
              }}
            ></input>
          </div>
          */
          }
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
            <button class="btn mr-2">취소</button>
            <button type="submit" class="btn">확인</button>
          </div>
        </form>
      </div>

    </>
  );
};

export default PictureUploadPage;
