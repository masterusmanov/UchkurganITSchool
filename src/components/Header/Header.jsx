// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/images/LOGO.png"
import liner from "../../assets/images/header/liner.svg"
import human from "../../assets/images/header/human.svg"
import chart from "../../assets/images/header/chart.svg"
import play from "../../assets/images/header/play.svg"
import circletext from "../../assets/images/header/circletext.png"
import Dropdown from "../Dropdown/Dropdown";

export default function Header(){
    return(
        <div className="bg-[#D2E6E4] rounded-b-3xl">
            <div className="hidden md:flex bg-[#D2E6E4] rounded-full p-7 absolute md:top-[470px] xl:top-[520px] 2xl:top-[580px] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <img src={circletext} alt="" className="w-[170px] absolute right-6"/>
                <div className="bg-[#0B7077] rounded-full p-14">
                    <img src={play} alt="" className="w-[50px] mx-auto"/>
                </div>
            </div>
            <div className="container mx-auto h-full ">
                <img src={liner} alt="" className="absolute lg:mx-[400px]"/>
                <div className="flex justify-between items-center font-nunito gap-6 font-[700]  h-[100px] relative px-2 2xl:px-0" >
                    <img src={logo} alt="" className="w-[150px]"/>
                    <a href="#" className="w-[120px] bg-[#77BF44] text-white py-2 px-4 rounded-lg text-[14px] md:ml-[300px] lg:hidden">Online kurs</a>    
                    <div className="hidden lg:flex justify-end items-center gap-8  w-1/2">
                        <a href="#">Bosh sahifa</a>
                        <a href="#">Kariyeramiz</a>
                        <a href="#">Biz haqimizda</a>
                    </div>
                    <div className="lg:hidden mr-5 text-[38px]">
                       <Dropdown/>
                    </div>
                    <div className="hidden lg:flex items-center gap-6">
                        <a href="#" className="bg-[#77BF44] text-white py-2 px-4 rounded-lg">Online kurs</a>    
                        <i className='bx bx-phone font-[700] text-gray-500 text-[20px]'><span className="ml-1">+998913604254</span></i>
                    </div>
                </div>
                <div className="md:flex justify-between items-center my-[20px]">
                    <div className="pl-5 lg::w-1/2 font-nunito">
                         <p className="bg-white font-[600] inline-block py-2 px-4 rounded-xl text-[12px] lg:text-[18px]">Hech qachon o`rganishni to`xtatmang!</p>
                        <h1 className="text-[28px] lg:text-[48px] xl:text-[54px] 2xl:text-[64px] text-[#0B7077] font-[700] my-[10px] md:my-[50px] ">Onlayn kurslar orqali mahoratingizni oshiring!</h1>
                        <div className="lg:my-[20px] xl:my-[40px]">
                            <a href="#" className="bg-[#FD661F] py-2 px-6 rounded-xl text-[18px] text-white">Online kurs</a> 
                        </div>
                    </div>
                    <div className="">
                        <img src={chart} alt="" className="absolute mx-[250px] my-[70px] lg:mx-[270px] xl:mx-[350px] 2xl:mx-[420px] xl:my-[100px] 2xl:my-[150px]"/>
                        <img src={human} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}