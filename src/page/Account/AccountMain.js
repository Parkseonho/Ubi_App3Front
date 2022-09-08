import React from "react";

function AccountMain() {
    return (
        <div className="max-w-4xl mx-auto MarginBottom" >
            <div className="max-w-4xl mx-auto my-4">
                <div
                    style={{
                        backgroundColor: "#CCF2F4",
                        height: 60

                    }} >
                    <strong className="text-center justifly-center">가계부</strong>
                </div>
                <div className="PageHeight">
                    <div className="w-full">
                        <button className="py-2 btn-outline w-2/4">지출내역</button>
                        <button className="py-2 btn-outline w-2/4">예산관리</button>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default AccountMain;
