import React from 'react'
import NavbarBanner from './Component/NavbarBanner'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarEnd from './Component/NavbarEnd';
import Navbar from './Component/Navbar';
import MainSlider from './Component/MainSlider';
import E_Governance from './Component/E_Governance';
import Star_Performer from './Component/Star_Performer';
import Info from './Component/Info';
import Contact from './Component/Contact';
import Digital_Initiatives from './Component/Digital_Initiatives';

function App() {
  return (
    <div>
      <NavbarBanner />
      <NavbarEnd />
      <Navbar />
      <div className=''>
        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 w-auto h-auto  bg-white   ">

            <div className=" pl-2">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-28 w-10 h-12'>
                <img src="/twitter.ico" alt="twitter_img" className='w-[32px] h-[32px] mt-2' />
                <span><a href="https://twitter.com/ugc_india?ref_src=twsrc%5Etfw" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Follow Us on <br />Twitter</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 top-[252px] w-auto h-auto  bg-white   ">

            <div className=" pl-2">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-28 w-10 h-12'>
                <img src="/facebook.ico" alt="twitter_img" className='w-[32px] h-[32px] mt-2' />
                <span><a href="https://www.facebook.com/UniversityGrantsCommission" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Like Us on <br />Facebook</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 top-[301px] w-auto h-auto  bg-white   ">

            <div className=" pl-2">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-28 w-10 h-12'>
                <img src="linkedin.ico" alt="twitter_img" className='w-[32px] h-[32px] mt-2' />
                <span><a href="https://www.linkedin.com/company/ugc-india/" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Follow Us on <br />LinkedIn</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 top-[350px] w-auto h-auto  bg-white   ">

            <div className=" pl-2">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-28 w-10 h-12'>
                <img src="/insta.ico" alt="twitter_img" className='w-[32px] h-[32px] mt-2' />
                <span><a href="https://www.instagram.com/ugcindia/" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Follow Us on <br />Instagram</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 top-[399px] w-auto h-auto  bg-white   ">

            <div className=" pl-2 ">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-28 w-10 h-12'>
                <img src="/youtube.ico" alt="twitter_img" className='w-[32px] h-[32px] mt-2' />
                <span><a href="https://www.youtube.com/channel/UClbbWYTjSiXnhShJ0Z1-05g" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Subscribe on <br />YouTube</a></span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative z-50  shadow-md text-center">
          <div className="fixed right-0 top-[448px] w-auto h-auto  bg-white   ">

            <div className=" pl-2 ">
              <div className='flex group  items-center  text-white  overflow-hidden transition-all duration-300 hover:w-32 w-10 h-12'>
                <img src="/Whatsapp.ico" alt="twitter_img" className='w-[32px] h-[32px] ' />
                <span><a href="https://whatsapp.com/channel/0029VaCh6c50gcfMkcXzgq1w" target="_blank" className="text-black text-xs ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">Follow Us on <br />WhatsApp group</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MainSlider />
      <E_Governance />
      <Star_Performer />
      <Info />
      <Contact />
      <Digital_Initiatives />
      


    </div >
  )
}

export default App
