import React from "react";
import Doughnut from "./Doughnut";
import stress from "../../components/picture/stress.svg"
import food from "../../components/picture/food.svg"
import hospital from "../../components/picture/hospital.svg"
import toiletries from "../../components/picture/toiletries.svg"
import other from "../../components/picture/other.svg"


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


                    <img src={stress} alt="stress" className='mx-auto  ' />
                    <img src={food} alt="food" className='mx-auto  ' />
                    <img src={hospital} alt="hospital" className='mx-auto ' />
                    <img src={toiletries} alt="toiletries" className='mx-auto ' />
                    <img src={other} alt="other" className='mx-auto ' />
                </div>
            </div>
        </div>
    );
}
export default AccountMain;
