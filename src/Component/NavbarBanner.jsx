import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaArrowDown } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
function NavbarBanner() {
    return (
        <div>
            <div className='bg-[#3d344b] flex flex-wrap font-[13px] w-full max-h-28 text-white space-x-5 text-center justify-center pt-1 text-sm'>
                <div className='flex'>
                    <a href="" className=''><TiHome className='text-[#ff6c3a] mt-[5.5px]' /></a>|
                </div>
                <div className=''>
                    <a href="" className='hover:text-[#ff6c3a] text-sm flex '>
                        <FaArrowDown className='mt-[5.5px] mr-1' />
                        Skip to main content |
                    </a>
                </div>
                <div className='flex'>
                    <a href="" className='hover:text-[#ff6c3a] flex'>
                        <FaArrowDown className='mt-[5.5px] mr-1' />
                        Skip to Navigation |
                    </a>
                </div>
                <div>
                    <a href="" className='hover:text-[#ff6c3a] flex'>
                        <FaVolumeUp  className='mt-[5.5px] mr-1'/>
                        Screen Reader |
                    </a>
                </div>
                <div>
                    <a href="" className='hover:text-[#ff6c3a]'>Text Size:</a>
                </div>
                <div>
                    <a href="" className='hover:text-[#ff6c3a]'>A
                        <sup>-</sup>
                    </a>
                </div>
                <div>
                    <a href="" className='hover:text-[#ff6c3a]'>A</a>
                </div>
                <div>
                    <a href="" className='hover:text-[#ff6c3a]'>A
                        <sup>+ </sup>|

                    </a>
                </div>
                <a href="" className='hover:text-[#ff6c3a]'>Hindi |</a>
                <a href="" className='hover:text-[#ff6c3a]'>Contact Us |</a>
                <a href="" className='hover:text-[#ff6c3a]'>FAQs |</a>
                <a href="" className='hover:text-[#ff6c3a]'>e-Procurement |</a>
                <a href="" className='hover:text-[#ff6c3a]'>Tenders |</a>
                <a href="" className='hover:text-[#ff6c3a]'>Jobs |</a>
                <a href="" className='hover:text-[#ff6c3a] '><IoSearch className='mt-[5.5px] mr-1' /> </a>|

            </div>
        </div>
    )
}

export default NavbarBanner
