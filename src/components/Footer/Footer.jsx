import logo from "../../assets/images/LOGO.png"
export default function Footer() {
    return(
        <div className="bg-[#F9FAFB]">
            <div className="container mx-auto md:px-2 2xl:px-0 py-[50px] md:flex items-center justify-between">
                <div className="grid p-5 md:p-0 md:flex items-center gap-4 md:gap-6 lg:gap-14">
                    <img src={logo} alt="Logo" className="w-[150px]"/>
                    <div className="font-nunito text-[18px] grid gap-4">
                        <div className="flex items-center gap-6">
                            <a href="#" className="font-[700] text-gray-500">Kurslar</a>
                            <a href="#" className="font-[700] text-gray-500">Online kurslar</a>
                        </div>
                        <p className="font-[700] text-gray-500 text-[15px]">© Uchkurgan IT school - {new Date().getFullYear()}. Barcha huquqlar himoyalangan </p>
                    </div>
                </div>
                <div className="p-5 md:p-0">
                    <div className="flex items-center gap-6">
                        <a href="#"><i className='bx bxl-instagram-alt text-[32px] text-gray-600' ></i></a>
                        <a href="#"><i className='bx bxl-telegram text-[32px] text-gray-600' ></i></a>
                        <a href="#"><i className='bx bxl-linkedin-square text-[32px] text-gray-600' ></i></a>
                        <a href="#"><i className='bx bxl-facebook-circle text-[32px] text-gray-600'></i></a>
                        <a href="#"><i className='bx bxl-youtube text-[32px] text-gray-600' ></i></a>
                    </div>
                    <h1 className="text-[24px] font-nunito font-[700] text-gray-500 mt-[10px]">+998913604254</h1>
                </div>
            </div>
        </div>
    )
}