import React from 'react'
import Image from 'next/image'
const HeroProfile = () => {
    let date = new Date();
  let year = date.getFullYear();
  return (
    
      <div className='col-start-1 col-end-3'><div className='profile mt-11 mb-2 relative'> <Image
                            className='rounded-[50%]'
                            src="/images/Osama.jpeg"
                            width={540}
                            height={540}
        alt="profile" /><div className="emoji absolute right-0 bottom-9 rounded-full bg-[#010409] border border-[#21262D] w-10 h-10 p-[10px] text-sm">😄</div>
      </div>
        <div className='mt-5 text-[26px] font-semibold font-sans'>Osama Shaikh<span className='text-[#7d8590] font-normal text-xl '> . </span><span className='text-[#7d8590] font-normal text-xl'>he/him</span></div>
        <div className='text-[#e6edf3] mt-3'> Web Developer | Transforming Ideas into Code🧑‍💻</div>
        <div className='flex items-center justify-between gap-4 mt-5'>
          {/* <button className='border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Hire me</button> */}
          <button className='border border-[#383a3d2d] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border hover:border-[#6c717b] hover:bg-[#0D1117]'>Hire me</button>
        {/* <button className='border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Resume</button> */}
        <button className='border  rounded-md  py-[6px] w-full text-[#e6edf3] font-medium border-[#6c717b] hover:bg-[#54575b62] hover:border-0'>Resume</button>
        </div>
        {/* <h3 className='font-sans'>Copyright © {year} OS.</h3> */}
      </div>
      
  )
}

export default HeroProfile