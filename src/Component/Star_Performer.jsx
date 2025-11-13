import React from 'react'

function Star_Performer() {
    return (
        <div>
            <div className='mt-10 h-auto w-full bg-white text-center justify-center py-10'>
                <div className='w-6xl h-[449px] bg-white mx-auto mt-12 rounded-2xl'>
                    <div className='pt-5'>
                        <h3 className='text-[#3e4c66] text-3xl font-bold'><span className='text-[#ff6c3a] text-3xl font-bold'>Star Performer</span> of the Month</h3>
                    </div>
                    <div className='flex flex-wrap text-center justify-center gap-3 mt-5'>
                        <div className=' bg-white w-[250px] h-auto rounded-2xl hover:shadow-2xl transition-all duration-500'>
                            <img src="/SUNITA.jpg" alt="UGC_Equivalence" className='w-[154px] h-[165px] mx-auto pt-5' /><br />

                        </div>
                        <div className=' bg-white w-[250px] h-auto rounded-2xl hover:shadow-2xl transition-all duration-500'>
                            <img src="/Umesh.jpg" alt="UGC_Equivalence" className='w-[154px] h-[165px] mx-auto pt-5' /><br />

                        </div>
                        <div className=' bg-white w-[250px] h-auto rounded-2xl hover:shadow-2xl transition-all duration-500'>
                            <img src="/Sridhar.jpg" alt="UGC_Equivalence" className='w-[154px] h-[165px] mx-auto pt-5' /><br />

                        </div>
                        <div className=' bg-white w-[250px] h-auto rounded-2xl hover:shadow-2xl transition-all duration-500'>
                            <img src="/Raj.jpg" alt="UGC_Equivalence" className='w-[154px] h-[165px] mx-auto pt-5' /><br />

                        </div>
                    </div>
                    <div>
                        <button className="bg-[#3e4c66] text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:text-[#2e2b42] hover:border-2 transition-all  duration-200  mt-10 ">View All
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Star_Performer
