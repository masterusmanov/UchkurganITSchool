// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/images/LOGO.png"

export default function Header(){
    return(
        <div className="bg-[#D2E6E4] rounded-b-3xl">
            <div className="container mx-auto h-full border">
                <div className="h-full flex justify-between items-center font-nunito gap-6 font-[700]  h-[70px]">
                    <img src={logo} alt="" className="w-[150px]"/>
                    <div className="flex justify-end items-center gap-8 border w-1/2">
                        <a href="#">Bosh sahifa</a>
                        <a href="#">Kariyeramiz</a>
                        <a href="#">Biz haqimizda</a>
                    </div>
                        <div className="flex items-center gap-6">
                            <a href="#" className="bg-[#77BF44] text-white py-2 px-4 rounded-lg">Online kurs</a>    
                            <i className='bx bx-phone font-[700] text-gray-500 text-[20px]'><span className="ml-1">+998913604254</span></i>
                        </div>
                </div>
                <div>
                    <p>Hech qachon o`rganishni to`xtatmang</p>
                    <h1>Onlayn kurslar orqali mahoratingizni oshiring</h1>
                    <a href="#">Online kurs</a>
                </div>
            </div>
        </div>
    )
}