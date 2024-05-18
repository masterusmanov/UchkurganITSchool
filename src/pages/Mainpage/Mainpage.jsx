// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import line from "../../assets/images/main/line.svg";
import frontend from "../../assets/images/main/frontend.png";
import design from "../../assets/images/main/design.png";
import ps from "../../assets/images/main/ps.png";
import foundation from "../../assets/images/main/foundation.png";
import django from "../../assets/images/main/django.png";
import savodxon from "../../assets/images/main/savodxon.png";
import Kotlin from "../../assets/images/main/Kotlin.png";
import robotics from "../../assets/images/main/robotics.png";

const course = [
    {
        id: 1,
        img: frontend,
        title: "Frontend kursi",
        description: "Siz bu kursda HTML, CSS, Javascript dasturlash tili, Reactjs kutubxonalari bilan tanishasiz",
        category: "Frontend"
    },
    {
        id: 2,
        img: django,
        title: "Python Django kursi",
        description: "Siz bu kursda Python dasturlash tili va Django frameworklari bilan tanishasiz",
        category: "Backend"
    },
    {
        id: 3,
        img: foundation,
        title: "Foundation kursi",
        description: "Dasturlash sohasiga endi kirib kelayotganlar uchun Javascript va Python dasturlash tillarida boshlang`ich algoritmlash kursi",
        category: "Foundation"
    },
    {
        id: 4,
        img: ps,
        title: "PS, AI va CorelDraw kursi",
        description: "Siz bu kursda mustaqil rasmlarga ishlov berish va mashhur brendlarga logotip tayyorlashni o'rganasiz",
        category: "Dizayn"
    },
    {
        id: 5,
        img: design,
        title: "3D Max kursi",
        description: "Siz bu kursda uy va buyumlarni modellashtirishni o'rganasiz",
        category: "Dizayn"
    },
    {
        id: 6,
        img: savodxon,
        title: "Kompyuter savodxonligi",
        description: "Siz bu kursda kompyuter haqida boshlang`ich bilim va MS Office dasturlarida mustaqil ishlashni o'rganasiz",
        category: "Savodxonlik"
    },
    {
        id: 7,
        img: robotics,
        title: "Robototexnika kursi",
        description: "Siz harakatlanadigan barcha narsani prototipini yasashingiz va uni dastur yordamida harakatlantirishingiz mumkin",
        category: "Robototexnika"
    },
    {
        id: 8,
        img: Kotlin,
        title: "Mobil dasturlash kursi",
        description: "Siz bu kursda android mobil qurilmalar uchun turli xil dasturlar yozishni o'rganasiz",
        category: "Mobil"
    }
]
export default function Mainpage(){

    const [items, setItems] = useState(course);

    const filterItem = (category) => {
        const updatedItems = course.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    }

    return(
        <div>
            <div className="font-nunito font-[700] text-[48px]">
                <h1 className="text-[#FD661F] text-center">Bizning kurslar</h1>
                <img src={line} alt="line" className="mx-[800px]"/>
            </div>
            <div className="text-[18px] font-nunito flex flex-wrap items-center justify-center gap-6 my-[70px]">
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => setItems(course)}>Barcha kurslar</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Dizayn")}>Grafik dizayn</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Frontend")}>Frontend</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Backend")}>Backend</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Foundation")}>Foundation</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Savodxonlik")}>Kompyuter savodxonligi</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Robototexnika")}>Robototexnika</button>
                <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Mobil")}>Mobil dasturlash</button>
            </div>
            <div className="flex flex-wrap justify-evenly gap-6 ">
                {items.map((product) => (
                <div key={product.id} className="rounded-lg w-[300px] shadow-lg shadow-gray-400 font-nunito ">
                    <div className="bg-[#e6e6e6] rounded-lg">
                            <img src={product.img} alt="" className="p-10" />
                        <div className="bg-white p-5">
                            <h1 className="text-[18px] font-[700]">{product.title}</h1>
                            <p className="font-[600] text-gray-500">{product.category}</p>
                            <p className="text-[#000] text-[14px] font-bold mt-[10px]">{product.description.slice(0, 50)} . . .</p>
                        <button className="float-right my-[15px] text-[#77BF44] font-[700]">Batafsil</button>
                        </div>
                    </div>
                </div>
                ))}
          </div>
      </div>
    )
}