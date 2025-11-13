import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";
function Navbar() {
    return (
        <div>
            <div className='bg-[#ff6c3a] w-auto h-auto'>
                <div className='mx-auto bg-[#ff6c3a] w-auto h-auto'>
                    <ul className='flex flex-wrap text-white h-14 text-center justify-center my-auto font-bold text-[15px]'>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex h-14 items-center transition-all duration-300 ease-linear'>
                            <FaHome className='m-1' />
                            Home
                            <ul>
                                <a href="">
                                    <li className='text-black'>

                                        
                                    </li>
                                </a>

                                <li className='text-black'></li>
                                <li className='text-black'></li>
                                <li className='text-black'></li>
                                <li className='text-black'></li>
                            </ul>
                        </li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <i className="fa fa-info-circle m-1"></i>
                            About Us</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <BsBuilding className='m-1' />
                            Organization</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <FaPencilAlt className='m-1' />
                            Key Initiatives</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <i className="fa fa-info-circle m-1"></i>
                            Guidelines</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <FaList className='m-1' />
                            Regulations</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <BsBuilding className='m-1' />
                            HEIs</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <i className="fa fa-university m-1"></i>
                            FHEI List</li>
                        <li className='pl-[8px] pr-[8px] hover:bg-gray-200 hover:text-[#ff6c3a] flex items-center transition-all duration-300'>
                            <i className="fa fa-book m-1" ></i>
                            e-Publications</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
