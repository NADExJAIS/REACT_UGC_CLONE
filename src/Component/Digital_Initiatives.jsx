import React from 'react'
import Slider from "react-slick";
function Digital_Initiatives() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className='bg-red-50'>
            <p className='text-[#ff6c3a] font-bold text-4xl text-center justify-center pt-5'>Digital <span className='text-[#524e61] pt-5 font-bold text-4xl text-center justify-center'>Initiatives</span></p>
            <div className="slider-container mt-5 ">
                <Slider {...settings}>
                    <div className='place-items-center  '>
                        <img src="/logo-2.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/DEB.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/NTA.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/UAMP.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/UTSAH.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/PoP_Portal.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/m1.png" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/logo-3.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                    <div className='place-items-center'>
                        <img src="/logo-4.jpg" alt="" className='w-[148px] h-[74px] hover:shadow-xl/30 rounded-r-lg transition duration-700 ease-in-out' />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Digital_Initiatives
