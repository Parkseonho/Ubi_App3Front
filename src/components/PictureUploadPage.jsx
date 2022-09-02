import React from "react";

const PictureUploadPage = () => {
  return (
    <>
    <div
        style={{
          backgroundColor: "#CCF2F4",
          height: 60

        }} >
       
      </div>
      <div className="PageHeight">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <strong class="label-text">사진/영상</strong>
          </label>
          <input type="file" className="form-control" ></input>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <strong class="label-text">내용</strong>
          </label>
          <textarea type="text" placeholder="내용" class="input input-bordered w-full " />
        </div>
        <button class="btn mr-2">취소</button>
        <button class="btn">확인</button>
      </div>

    </>
  );
};

export default PictureUploadPage;
