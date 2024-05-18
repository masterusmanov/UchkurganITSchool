// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/images/LOGO.png"
import liner from "../../assets/images/header/liner.svg"
import human from "../../assets/images/header/human.svg"
import chart from "../../assets/images/header/chart.svg"
import play from "../../assets/images/header/play.svg"
import circletext from "../../assets/images/header/circletext.png"

export default function Header(){
    return(
        <div className="bg-[#D2E6E4] rounded-b-3xl mb-[200px]">
            <div className="bg-[#D2E6E4] rounded-full p-7 absolute top-[720px] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <img src={circletext} alt="" className="w-[170px] absolute right-6"/>
                <div className="bg-[#0B7077] rounded-full p-14">
                    <img src={play} alt="" className="w-[50px] mx-auto"/>
                </div>
            </div>
            <div className="container mx-auto h-full ">
                <img src={liner} alt="" className="absolute mx-[400px]"/>
                <div className="flex justify-between items-center font-nunito gap-6 font-[700]  h-[100px] relative">
                    <img src={logo} alt="" className="w-[150px]"/>
                    <div className="flex justify-end items-center gap-8  w-1/2">
                        <a href="#">Bosh sahifa</a>
                        <a href="#">Kariyeramiz</a>
                        <a href="#">Biz haqimizda</a>
                    </div>
                        <div className="flex items-center gap-6">
                            <a href="#" className="bg-[#77BF44] text-white py-2 px-4 rounded-lg">Online kurs</a>    
                            <i className='bx bx-phone font-[700] text-gray-500 text-[20px]'><span className="ml-1">+998913604254</span></i>
                        </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-1/2 font-nunito">
                         <p className="bg-white font-[600] inline-block py-2 px-4 rounded-xl">Hech qachon o`rganishni to`xtatmang!</p>
                        <h1 className="text-[64px] text-[#0B7077] font-[700] my-[50px]">Onlayn kurslar orqali mahoratingizni oshiring!</h1>
                        <div>
                            <a href="#" className="bg-[#FD661F] py-2 px-6 rounded-xl text-[18px] text-white">Online kurs</a> 
                        </div>
                    </div>
                    <div>
                        <img src={chart} alt="" className="absolute mx-[550px] my-[200px]"/>
                        <img src={human} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}