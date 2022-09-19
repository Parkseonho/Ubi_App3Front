import React from "react";
import Doughnut from "./Doughnut";
import stress from "../../components/picture/stress.svg"
import food from "../../components/picture/food.svg"
import hospital from "../../components/picture/hospital.svg"
import toiletries from "../../components/picture/toiletries.svg"
import other from "../../components/picture/other.svg"
import Chart from "react-apexcharts";


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

                        <Chart
                            type="pie"
                            width={380}
                            height={380}
                            series={[350,330,332,555,109]}
                            options={{
                               labels:['병원비','스트레스해소','사료/식기','화장실 용품','기타 용품'],
                               colors:['#FFCFCF','#FFEAA1','#ABB3FF','#D9BBFF','#C3EAFF']
                            }}
                        >
                        </Chart>
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
