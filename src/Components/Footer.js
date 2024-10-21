import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className="bg-[rgb(29,115,134)] py-20 px-12">
            <div className='flex gap-4 justify-between'>
                <div className='flex flex-col gap-4'>
                    <a className='text-white text-base' href="">Join as faculty</a>
                    <a className='text-white text-base' href="">Join Pro</a>
                    <a className='text-white text-base' href="">Careers</a>
                    <a className='text-white text-base' href="">Blog</a>
                    <a className='text-white text-base' href="">FAQs</a>
                    <a className='text-white text-base' href="">Contact Us</a>
                    <a className='text-white text-base' href="">Bug Bounty</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <Image className="pb-4 w-auto h-auto" src={'/facebook-icon.png'} width={20} height={20} alt=''/>
                        <Image className="pb-4 w-auto h-auto" src={'/youtube@3x.png'} width={20} height={20} alt=''/>
                        <Image className="pb-4 w-auto h-auto" src={'/instagram@3x.png'} width={20} height={20} alt=''/>
                        <Image className="pb-4 w-auto h-auto" src={'./x_circle-min.svg'} width={20} height={20} alt=''/>
                    </div>
                    <a className='text-white text-base' href="">Terms & Conditions</a>
                    <a className='text-white text-base' href="">Privacy Policy</a>
                    <a className='text-white text-base' href="">Marrow Policys</a>
                </div>
            </div>
            <div className='text-white text-xs mt-8 font-bold'>
                Neuroglia Health Pvt Limited © 2024
            </div>
        </div>
    )
}

export default Footer
