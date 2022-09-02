import React from "react";

const PictureMainPage = () => {


    return (
        <>
            <div
                style={{
                    backgroundColor: "#CCF2F4",
                    height: 60

                }} >
                <strong className="text-center justifly-center">사진</strong>
            </div>
            <div className="PageHeight">
                {/** select */}
                <div>
                    <select class="border select-sm max-w-xs w-2/4 text-center">
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
                    <select class="border select-sm max-w-xs w-2/4 text-center">
                        <option disabled selected>우비</option>
                        <option>꼬솜</option>
                    </select>
                </div>
                {/* 사용자 사진 및 이름 */}
                <div className="my-3 text-center">
                    <img className="mx-auto mask mask-circle h-24" src="https://placeimg.com/160/160/arch" />
                    <div className="mt-2">
                        <strong>
                            우비
                        </strong>
                    </div>
                </div>
                {/* 사용자 사진 및 이름 */}
                <div className="text-center my-3">
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                </div>
                <div className="text-center my-3">
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                </div>
                <div className="text-center my-3">
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                    <img class="inline mask mask-square mx-2 " src="https://placeimg.com/160/160/arch" />
                </div>
            </div>
        </>
    );
};

export default PictureMainPage;
