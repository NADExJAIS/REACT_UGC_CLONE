import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true


    };
    return (
        <div>
            <div className="slider-container ">
                <Slider {...settings}>
                    <div>
                        <video autoPlay muted loop width="100%" className="w-full h-auto" >
                            <source src="/video_slider.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <img src="/main-slider2.png" alt="img_2" className="w-full h-auto" />
                    </div>
                    <div>
                        <img src="/main-slider3.png" alt="img_3" className="w-full h-auto" />
                    </div>

                </Slider>
            </div>
            <div className='mt-5'>
                <marquee direction="left">

                    <a href="https://deemed.ugc.ac.in/" target='blank' className='text-[#ff6c3a] font-bold text-xl'> Invitation of applications from eligible colleges for Deemed to be University status, may apply on the portal at https://deemed.ugc.ac.in/  | </a>
                    <a href="https://aucollege.ugc.ac.in/" target='blank' className='text-[#ff6c3a] font-bold text-xl'>Invitation of applications from eligible colleges for conferment/extension of Autonomous status, colleges may apply on the portal at https://aucollege.ugc.ac.in</a>

                </marquee>
            </div>
            <div className='mt-2 w-auto h-auto'>
                <a href="https://www.mygov.in/group-issue/inviting-ideas-mann-ki-baat-prime-minister-narendra-modi-26th-october-2025/?target=inapp&type=group_issue&nid=363472" target='blank'>
                    <img src="https://cbpssubscriber.mygov.in/assets/uploads/X0qP81f7lg3YqNFI?2" alt="img_of_modi" className='h-[15%] w-[80%] mx-auto' />
                </a>
            </div>
            <div className='w-full mt-10 h-auto'>
                <div>
                    <h2 className='pl-37  text-3xl font-bold text-[#3e4c66]'>
                        <span className='text-[#ff6c3a]'>About</span> University Grants Commission

                    </h2>
                    <p className='text-justify pl-37 text-[#2e2b42]'>
                        The University Grants Commission (UGC) came into existence on 28th December,1953 and became a
                        statutory Organization of the Government of India by an Act of <br /> Parliament in 1956, for the
                        coordination,determination and maintenance of standards of teaching, examination and research in
                        university education.
                    </p>
                </div>
                <div>
                    <button className="bg-[#ff6c3a] text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#2e2b42] hover:border-2 transition-all  duration-200 ml-37 mt-5 ">Read More
                    </button>

                </div>
            </div>
        </div >
    )
}

export default MainSlider
