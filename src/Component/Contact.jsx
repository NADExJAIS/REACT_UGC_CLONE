import React from 'react'
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
function Contact() {
    return (
        <div className='flex flex-wrap text-center justify-center  w-full h-auto mb-5 mt-20 gap-5'>

            <div className='bg-white w-[360px] h-[300px] rounded-2xl shadow-2xl border-b-4 border-r-4 border-b-[#ff6c3a] border-r-[#ff6c3a]'>
                <div className=' w-[360px]  h-[70px] rounded-t-4xl place-items-center'>
                    <p className=' text-[#524e61]  text-xl font-bold border-b-4 border-b-[#ff6c3a]'>Anti-ragging / e-Samadhaan</p>

                </div>
                <div className='flex'>

                    <a href="https://www.ugc.gov.in/pdfnews/8213924_Public-notice-of-IME-Fake-University.pdf" className='text-[#524e61] font-bold' >
                        <img src="/anti-raging.png" alt="" className='w-[58px] h-[58px] ml-8' />

                    </a>
                    <p className='bg-red-600 text-white font-bold'><span className='text-xs'>24x7 Helpline Number </span> <br />
                        1800-180-5522 (Toll Free)
                    </p>

                </div>
                <div>
                    <img src="/samadhan_Logo.png" alt="samadhan_Logo" className='mx-auto' />
                </div>
            </div>


            <div className='bg-white w-[360px] h-[300px] rounded-2xl shadow-2xl border-b-4 border-r-4 border-b-[#ff6c3a] border-r-[#ff6c3a]'>
                <div className=' w-[360px]  h-[70px] rounded-t-4xl place-items-center'>
                    <p className=' text-[#524e61]  text-xl font-bold border-b-4 border-b-[#ff6c3a]'>Helpline Number @UGC  </p>

                </div>
                <div className=''>
                    <marquee behavior="scroll" direction="up" scrollamount="2" className='flex mx-2 h-48' >
                        <a href="https://www.ugc.gov.in/pdfnews/8213924_Public-notice-of-IME-Fake-University.pdf" className='text-[#524e61] font-bold' >
                            UGC Office Helpline:011-23604446,<br /> 011-23604200
                        </a><br />

                        <a href="https://www.ugc.gov.in/pdfnews/4725030_YUVAi.pdf" className='text-[#524e61] font-bold' >
                            Email: covid19help.ugc@gov.in
                        </a><br /><br />

                        <a href="https://www.ugc.gov.in/pdfnews/6608899_Public-Notice-for-ODL-application.pdf" className='text-[#524e61] font-bold' >

                            Scholarship/Fellowship Helpline:011-23604505


                        </a><br />
                        <br />
                    </marquee>

                </div>

            </div>


            <div className='bg-white w-[360px] h-[300px] rounded-2xl shadow-2xl border-b-4 border-r-4 border-b-[#ff6c3a] border-r-[#ff6c3a]'>
                <div className=' w-[360px]  h-[70px] rounded-t-4xl place-items-center'>
                    <p className=' text-[#524e61]  text-xl font-bold border-b-4 border-b-[#ff6c3a]'>RTIs</p>

                </div>
                <div className=''>
                    <marquee behavior="scroll" direction="up" scrollamount="2" className='flex mx-2 h-48' >
                        <ul>
                            <li><a href="/subpage/RTI-Act.aspx" target='_blank' className='text-[#524e61] inline-flex font-bold' >
                                <IoIosCheckmarkCircle className='mt-1 mr-1 text-[#ff6c3a]' />Right to Information Act
                            </a><br /></li>
                            <li><a href="/subpage/RTI-Act.aspx" target="_blank" className='text-[#524e61] inline-flex font-bold' >
                                <IoIosCheckmarkCircle className='mt-1 mr-1 text-[#ff6c3a]' />
                                Consolidated Quarterly Return from <br /> CPIOs of University Grant Commission,<br /> New Delhi
                            </a>
                            </li>
                            <li className='text-[#524e61] inline-flex' >
                                <IoIosCheckmarkCircle className='mt-1 mr-1 text-[#ff6c3a]' />
                                <a href="/subpage/RTI-Act.aspx" target="_blank" className='font-bold'>
                                    Information to be published in <br /> pursuance of section 4(1)(b) of Right to <br /> Information Act, 2005 (BEING UPDATED)
                                </a>
                            </li>

                            <li className='text-[#524e61] inline-flex' >
                                <IoIosCheckmarkCircle className='mt-1 mr-1 text-[#ff6c3a]' />
                                <a href="/subpage/RTI-Act.aspx" target="_blank" className='font-bold'>
                                    Central Public Information Officer & <br /> Appellate Authority as on 22.11.2022
                                </a>
                            </li>
                        </ul>

                    </marquee>

                </div>
                <div>
                    <button className="bg-white w-72 text-[#303030] font-semibold  px-6   hover:text-[#37953d]  transition-all  duration-200   ">View More
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Contact
