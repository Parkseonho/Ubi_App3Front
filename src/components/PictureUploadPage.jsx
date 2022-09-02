import React from "react";
import "../index.css"

const PictureUploadPage = () => {
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
        {/* 사진/영상 업로드 부분 */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <strong class="label-text">사진/영상</strong>
          </label>
          <input type="file" className="form-control" ></input>
        </div>
        {/* 내용 업로드 부분 */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <strong class="label-text">내용</strong>
          </label>
          <textarea type="text" placeholder="내용" class="input input-bordered w-full " />
        </div>
        {/* 확인/취소 버튼 */}
        <div>
          <button class="btn mr-2">취소</button>
          <button class="btn">확인</button>
        </div>
      </div>

    </>
  );
};

export default PictureUploadPage;
