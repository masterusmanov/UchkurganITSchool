// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import line from "../../assets/images/main/line.svg";
import line2 from "../../assets/images/main/line2.svg";
import frontend from "../../assets/images/main/frontend.png";
import design from "../../assets/images/main/design.png";
import ps from "../../assets/images/main/ps.png";
import foundation from "../../assets/images/main/foundation.png";
import django from "../../assets/images/main/django.png";
import savodxon from "../../assets/images/main/savodxon.png";
import Kotlin from "../../assets/images/main/Kotlin.png";
import robotics from "../../assets/images/main/robotics.png";
import Slider from "../../components/Slider/Slider";

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
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        agreeToOffer: false
      });
    

    const filterItem = (category) => {
        const updatedItems = course.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreeToOffer) {
          alert('You must agree to the offer before submitting the form.');
          return;
        }
        // Handle form submission logic
        console.log('Form submitted:', formData);
      };
    

    return(
        <div>
            <div className="container mx-auto">
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
                    <div key={product.id} className="rounded-lg w-[350px] shadow-lg shadow-gray-400 font-nunito ">
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
                <div className="font-nunito font-[700] text-[48px] mt-[150px]">
                    <h1 className="text-[#0B7077] text-center">Uchkurgan IT school - bu,</h1>
                    <img src={line2} alt="line" className="mx-[900px]"/>
                </div>
                <div className="flex flex-wrap justify-around gap-2 mt-[100px] font-nunito">
                    <div className="w-1/4 bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bx-building-house'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Dasturlash, dizayn va marketing kabi zamonaviy kasblar o‘rgatiladigan markaz.</p>
                    </div>
                    <div className="w-1/4 bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bxs-hot'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
                    </div>
                    <div className="w-1/4 bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bx-user'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
                    </div>
                </div>
            </div>
            <Slider/>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center gap-10 p-10">
                    <div className="bg-[#F3EBDF] rounded-lg w-[49%] text-[#967851] font-nunito p-10">
                        <h1 className="font-bold text-[38px]">1 yil ichida talabgir va daromadli mutaxassis bo‘ling!</h1>
                        <p className="font-[600] text-[22px] mt-5">“Uchkurgan IT school”da dasturlash, dizayn, kompyuter savodxonligi va 8 yoshdan 16 yoshgacha bo'lgan bolalar uchun Robototexnika yo‘nalishlarini 4 oydan 1 yilgacha bo‘lgan muddatda o‘rganib, bozorda talabgir kasb egasi bo‘ling</p>
                    </div>
                    <div className="w-[39%] bg-[#F9F7F3] rounded-lg font-nunito p-10">
                        <h1 className="text-[28px] font-bold">Bepul konsultatsiya</h1>
                        <p className="text-[15px] font-[600] my-2">Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz</p>
                        <form onSubmit={handleSubmit} className="my-[50px]">
                            <div className="text-[18px] font-[700] text-gray-500 font-nunito">
                                <label>
                                Ismingiz:
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ismingiz"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="outline-none border border-[#D0D5DD] rounded-lg p-3 w-full my-3"
                                />
                                </label>
                            </div>
                            <div className="text-[18px] font-[700] text-gray-500 font-nunito">
                                <label>
                                Telefon raqamingiz:
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+998901234567"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="outline-none border border-[#D0D5DD] rounded-lg p-3 w-full my-3"
                                />
                                </label>
                            </div>
                            <div className="text-[14px] font-[700] font-nunito">
                                <label>
                                <input
                                    type="checkbox"
                                    name="agreeToOffer"
                                    checked={formData.agreeToOffer}
                                    onChange={handleChange}
                                    className="mx-[10px]"
                                />
                                Shaxsiy ma`lumotlarni <span><a href="#" className="text-blue-500 underline">qayta ishlanishiga</a></span> roziman
                                </label>
                            </div>
                            <button type="submit" className="text-white rounded-lg w-full mt-[50px] bg-[#0B7077] py-3 px-6">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}