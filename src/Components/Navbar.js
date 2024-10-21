import React from 'react'
import Image from 'next/image'

function Navbar() {
    return (
        <div className="sticky top-0 z-10 w-full">
            <div className="flex justify-between items-center w-full bg-[#1d7386] py-4 px-7 shadow-xl shadow-[#00000029]">
                <div>
                    <Image src={'./marrow-blue.svg'} width={100} height={100} className='w-auto h-auto' alt=''></Image>
                </div>
                <div>
                    <span className="cursor-pointer block ">
                        <div className="w-5 h-1 my-1 bg-[#62C8DF]"></div>
                        <div className="w-5 h-1 my-1 bg-[#62C8DF]"></div>
                        <div className="w-5 h-1 my-1 bg-[#62C8DF]"></div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
