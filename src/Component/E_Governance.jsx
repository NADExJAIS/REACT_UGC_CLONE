import React from 'react'
import { FaLaptop } from "react-icons/fa";
import { FaHandMiddleFinger } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
function E_Governance() {
  return (
    <div>
      <div className='mt-5 h-[750px] w-full bg-[url(/elements-dark.jpg)] text-center justify-center'>
        <div className=''>
          <div className=' flex flex-wrap text-center justify-center gap-5 pt-12  '>
            <div className='bg-white w-44 h-36 rounded-r-lg border-l-5 border-[#ff6c3a]'>
              <FaLaptop className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-3'>e-Governance <br />
                @UGC</p>
            </div>
            <div className='bg-white w-44 h-36 rounded-lg hover:border-l-5 hover:border-[#ff6c3a] hover:rounded-tr-lg transition-all duration-200'>
              <FaHandMiddleFinger className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-3'>Key
                <br />
                Initiatives</p>
            </div>
            <div className='bg-white w-44 h-36 rounded-lg hover:border-l-5 hover:border-[#ff6c3a] hover:rounded-tr-lg transition-all duration-200'>
              <FaGraduationCap className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-3'>Student<br />
                Corner</p>
            </div>
            <div className='bg-white w-44 h-36 rounded-lg hover:border-l-5 hover:border-[#ff6c3a] hover:rounded-tr-lg transition-all duration-200'>
              <FaUsers className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-3'>Faculty Corner/ <br />
                Non-Teaching Staff</p>
            </div>
            <div className='bg-white w-44 h-36 rounded-lg hover:border-l-5 hover:border-[#ff6c3a] hover:rounded-tr-lg transition-all duration-200'>
              <BiSolidInstitution className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-3'>Details of <br />
                HEIs</p>
            </div>
            <div className='bg-white w-44 h-36 rounded-lg hover:border-l-5 hover:border-[#ff6c3a] hover:rounded-tr-lg transition-all duration-200'>
              <FaGlobeAmericas className='mx-auto mt-5 text-[#ff6c3a] w-[37px] h-[35px]' />
              <p className='text-[#5e5964] font-bold pt-2 pl-5 flex'>UGC <br />
                Green Initiatives
                <img src="/blink_new.gif" className='h-[10%] w-[20%] mt-8' />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='w-6xl h-[449px] bg-white mx-auto mt-12 rounded-2xl '>
              <div className='pt-5'>
                <h3 className='text-[#3e4c66] text-3xl font-bold'><span className='text-[#ff6c3a] text-3xl font-bold'>e-Governance</span> @UGC</h3>
              </div>
              <div className='flex flex-wrap text-center justify-center gap-3 mt-5'>
                <div className='bg-white w-[250px] h-auto rounded-2xl hover:shadow-lg transition-all duration-500'>
                  <img src="/UGC_Equivalence.jpg" alt="UGC_Equivalence" className='w-[165px] h-[90px] mx-auto pt-5' /><br />
                  <p className='pt-2 pb-5 text-[#3e4c66] text-xl font-bold hover:text-[#ff6c3a] transition-all duration-500'>UGC Equivalence <br /> Portal</p>
                </div>
                <div className='bg-white w-[250px] h-auto rounded-2xl hover:shadow-lg transition-all duration-500'>
                  <img src="/PhD_Citation_Portal.jpg" alt="UGC_Equivalence" className='w-[165px] h-[90px] mx-auto pt-5' /><br />
                  <p className='pt-2 pb-5 text-[#3e4c66] text-xl font-bold hover:text-[#ff6c3a] transition-all duration-500'> UGC Ph.D. <br /> Excellence Citation<br /> Portal</p>
                </div>
                <div className='bg-white w-[250px] h-auto rounded-2xl hover:shadow-lg transition-all duration-500'>
                  <img src="/fhei_logo.png" alt="UGC_Equivalence" className='w-[165px] h-[90px] mx-auto pt-5' /><br />
                  <p className='pt-2 pb-5 text-[#3e4c66] text-xl font-bold hover:text-[#ff6c3a] transition-all duration-500'>UGC FHEI</p>
                </div>
                <div className='bg-white w-[250px] h-auto rounded-2xl hover:shadow-lg transition-all duration-500'>
                  <img src="/mmmc.png" alt="UGC_Equivalence" className='w-[165px] h-[90px] mx-auto pt-5' /><br />
                  <p className='pt-2 pb-5 text-[#3e4c66] text-xl font-bold hover:text-[#ff6c3a] transition-all duration-500'> Malviya Mission</p>
                </div>
              </div>
              <div >
                <button className="bg-[#3e4c66] text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#2e2b42] hover:border-2 transition-all  duration-200  mt-10  ">View All
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default E_Governance
