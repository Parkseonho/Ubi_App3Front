import React from "react";
import Doughnut from "./Doughnut";


function AccountMain() {
    return (
        <div className="max-w-4xl mx-auto MarginBottom" >
            <div className="max-w-4xl mx-auto my-4">
                <div>
                    <strong className="absolute inset-x-0 top-0">가계부</strong>
                </div>
                <div className="PageHeight">
                    <div className="w-full">
                        <button className="py-2 btn-outline w-2/4">지출내역</button>
                        <button className="py-2 btn-outline w-2/4">예산관리</button>
                    </div>
                    <div>
                        <Doughnut />
                    </div>
                </div>
                
            
            </div>
        </div>
    );
}
export default AccountMain;
