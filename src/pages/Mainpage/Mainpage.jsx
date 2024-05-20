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
import loca from "../../assets/images/main/loca.webp";
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
            <div className="container mx-auto my-[50px] md:my-[150px]">
                <div className="font-nunito font-[700] text-[48px]">
                    <h1 className="text-[#FD661F] text-center">Bizning kurslar</h1>
                    <img src={line} alt="line" className="mx-[180px] md:mx-[400px] lg:mx-[550px] xl:mx-[680px] 2xl:mx-[800px]"/>
                </div>
                <div className="text-[18px] font-nunito flex flex-wrap items-center justify-center gap-6 my-[40px] md:my-[60px] lg:my-[70px]">
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => setItems(course)}>Barcha kurslar</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Dizayn")}>Grafik dizayn</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Frontend")}>Frontend</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Backend")}>Backend</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Foundation")}>Foundation</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Savodxonlik")}>Kompyuter savodxonligi</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Robototexnika")}>Robototexnika</button>
                    <button className="font-[600] border border-[#B7B7B7] rounded-lg py-2 px-4 hover:bg-[#0B7077] hover:text-white" onClick={() => filterItem("Mobil")}>Mobil dasturlash</button>
                </div>
                <div className="flex flex-wrap justify-evenly gap-6 p-5 md:p-0 xl:p-3 ">
                    {items.map((product) => (
                    <div key={product.id} className="rounded-lg md:w-[350px] lg:w-[300px] xl:w-[280px] 2xl:w-[350px] shadow-lg shadow-gray-400 font-nunito ">
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
                <div className="font-nunito font-[700] text-[48px] mt-[100px] 2xl:mt-[150px]">
                    <h1 className="text-[#0B7077] text-center">Uchkurgan IT school - bu,</h1>
                    <img src={line2} alt="line" className=" mx-[150px] md:mx-[500px] lg:mx-[620px] xl:mx-[770px] 2xl:mx-[900px]"/>
                </div>
                <div className="grid lg:flex flex-wrap justify-around gap-4 p-4 md:p-6 lg:p-2 mt-[50px] font-nunito">
                    <div className="lg:w-[30%] xl:w-1/4 mx-auto bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bx-building-house'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Dasturlash, dizayn va marketing kabi zamonaviy kasblar o‘rgatiladigan markaz.</p>
                    </div>
                    <div className="lg:w-[30%] xl:w-1/4 mx-auto bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bxs-hot'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
                    </div>
                    <div className="lg:w-[30%] xl:w-1/4 mx-auto bg-[#F9FAFB] rounded-lg p-5">
                        <i className='bg-[#11B181] rounded-full p-2 text-white text-[32px] bx bx-user'></i>
                        <p className="mt-[10px] text-justify text-[18px] text-gray-500 font-[600]">Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo‘lgan ishonchni mustahkamlovchi maskan.</p>
                    </div>
                </div>
            </div>
            <Slider/>
            <div className="container mx-auto">
                <div className="grid lg:flex flex-wrap justify-center gap-10 p-5 lg:p-10">
                    <div className="bg-[#F3EBDF] rounded-lg lg:w-[49%] text-[#967851] font-nunito p-5 lg:p-10">
                        <h1 className="font-bold text-[24px] lg:text-[38px]">1 yil ichida talabgir va daromadli mutaxassis bo‘ling!</h1>
                        <p className="font-[600] lg:text-[22px] mt-5">“Uchkurgan IT school”da dasturlash, dizayn, kompyuter savodxonligi va 8 yoshdan 16 yoshgacha bo`lgan bolalar uchun Robototexnika yo‘nalishlarini 4 oydan 1 yilgacha bo‘lgan muddatda o‘rganib, bozorda talabgir kasb egasi bo‘ling</p>
                    </div>
                    <div className="lg:w-[39%] bg-[#F9F7F3] rounded-lg font-nunito p-10">
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
                <div>
                    <div className="font-nunito font-[700] text-[48px] text-center lg:text-left mt-[100px] xl:mt-[150px] lg:px-5">
                        <h1 className="text-[#0B7077]">Bizning manzilimiz</h1>
                        <img src={line2} alt="line" className="mx-[150px] md:mx-[420px] lg:mx-[250px]"/>
                    </div>
                    <div className="my-[50px] xl:my-[100px] grid lg:flex justify-center gap-6 lg:gap-10 p-5">
                        <div className="lg:w-1/2 bg-[#F9F7F3] rounded-lg p-5 lg:p-10 flex flex-col gap-10">
                            <div>
                                <div className="flex items-center gap-6 font-nunito text-[22px] 2xl:text-[24px] font-bold">
                                    <img src={loca} alt="location" className="w-[30px]"/>
                                    <h2 className="text-gray-500">Manzilimiz:</h2>
                                </div>
                                <h2 className="text-[18px] 2xl:text-[22px] font-[700] ml-[50px]">Namangan viloyati, Uchqo`rg`on tumani, Andijon ko`chasi 86-uy</h2>
                            </div>
                            <div>
                                <div className="flex items-center gap-6 font-nunito text-[22px] 2xl:text-[24px] font-bold">
                                    <i className='bx bx-current-location text-[#E82327]'></i>
                                    <h2 className="text-gray-500">Mo`ljal:</h2>
                                </div>
                                <h2 className="text-[18px] 2xl:text-[22px] font-[700] ml-[50px]">Sobiq Uchqo`rg`on Iqtisodiyot kolleji, hozirgi Uchqo`rg`on 1-sonli kasb-hunar maktabi</h2>
                            </div>
                            <div>
                                <div className="flex items-center gap-6 font-nunito text-[22px] 2xl:text-[24px] font-bold">
                                    <i className='bx bx-alarm text-[#E82327]'></i>
                                    <h2 className="text-gray-500">Ish vaqti:</h2>
                                </div>
                                <h2 className="text-[18px] 2xl:text-[22px] font-[700] ml-[50px]">09:00 - 18:00</h2>
                            </div>
                            <div>
                                <div className="flex items-center gap-6 font-nunito text-[22px] 2xl:text-[24px] font-bold">
                                    <i className='bx bx-phone text-[#E82327]'></i>
                                    <h2 className="text-gray-500">Telefon:</h2>
                                </div>
                                <h2 className="text-[18px] 2xl:text-[22px] font-[700] ml-[50px]">+998913604254</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5056.008808882155!2d72.07887262265041!3d41.10568387891249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcacee34000001%3A0xcaf68d83b39a580b!2z0K3QutC-0L3QvtC80LjRh9C10YHQutC40Lkg0LrQvtC70LvQtdC00LYg0KPRh9C60YPRgNCz0LDQvdCw!5e0!3m2!1sru!2s!4v1716110992196!5m2!1sru!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg "
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}