import React from 'react'

function NavbarEnd() {
    return (
        <div>
            <div className='flex flex-wrap'>
                <div className='grid grid-cols-9 grid-rows-1  mx-[175px] p-[15px]'>
                    <div className='w-[1024px] h-[93px] col-span-7  '>
                        <img src="/myImage.png" alt="my_img" className='' />
                    </div>
                    <div className='w-[190px] ms-auto'>
                        <img src="/G20_India_Logo.png" alt="G20_img" className='pe' />
                    </div>
                    <div className='ms-auto w-24 h-auto'>
                        <img src="/MHRD_logo.png" alt="MHRD_img" className='pl-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarEnd
