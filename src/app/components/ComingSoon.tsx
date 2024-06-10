import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";

const ComingSoon = () => {
    return (
        <>

            <div className='flex flex-col gap-5'>
                <div className="w-[100%] h-[1px] bg-[#2b2e33]"></div>
                <div className='flex items-center gap-5 text-[#454545]'>
                    <span className='flex flex-col'>
                        <span className='h-[2px] rounded-sm w-32 bg-[#454545]'></span>
                        <span className='h-2 w-16 boat bg-[#454545]'></span></span>
                    <span>Coming Soon...</span>
                </div>
                <h2 className='text-lg h-5 bg-[#1F1F1F] w-[70%]'></h2>
                <p className='text-xs text-neutral-400 h-10 bg-[#1F1F1F] '></p>
                <div className='flex items-center justify-between text-[#454545]'>

                    <span className=' flex items-center gap-2 cursor-pointer'>
                        <IoChevronForwardSharp />
                        Read blog
                    </span>

                    <span className='text-sm'>
                        0 min read
                    </span>
                </div>
            </div>
        </>
    )
}

export default ComingSoon