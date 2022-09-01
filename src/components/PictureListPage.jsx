import React from "react";

const PictureListPage = () => {
  return (
    <>
      <div style={{
        height: 690
      }} >
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
      </div>
      <button class="btn mr-2">취소</button>
      <button class="btn">확인</button>
    </>
  );
};

export default PictureListPage;
