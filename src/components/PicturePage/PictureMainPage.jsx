import React from "react";
import "../../index.css"

const PictureMainPage = () => {


    return (
        <>

            <strong className="absolute inset-x-0 top-0">사진</strong>

            <div className="PageHeight m-0">
                <div className="w-full">
                    <select className="border select-sm  w-2/4  text-center">
                        <option disabled selected>2022.08</option>
                        <option>2022.01</option>
                        <option>2022.02</option>
                        <option>2022.03</option>
                        <option>2022.04</option>
                        <option>2022.05</option>
                        <option>2022.06</option>
                        <option>2022.07</option>
                        <option>2022.08</option>
                        <option>2022.09</option>
                        <option>2022.10</option>
                        <option>2022.11</option>
                        <option>2022.12</option>
                    </select>
                    <select className="border select-sm w-2/4 text-center">
                        <option disabled selected>우비</option>
                        <option>꼬솜</option>
                    </select>
                </div>
                {/* 사용자 사진 및 이름 */}
                <div className="my-6 text-center">
                    <img className="mx-auto mask mask-circle h-24" src="https://placeimg.com/160/160/arch" />
                    <div className="mt-2">
                        <strong>
                            우비
                        </strong>
                    </div>
                </div>

                {/* 사용자 사진 및 이름 */}
                <div className="text-center my-3">
                    <img className="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                    <img className="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                </div>
                <div className="text-center my-3">
                    <img className="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                    <img className="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                </div>
            </div>
        </>
    );
};

export default PictureMainPage;
