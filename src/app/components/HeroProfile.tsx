import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Tooltip as ReactTooltip } from "react-tooltip";

const HeroProfile = () => {
 const handleHireButtonClick = () => {
    window.scrollToContact = true;
  };
    let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className='col-span-1 mobile:col-start-1 mobile:col-end-3'>
        <div className='flex items-center gap-5 mobile:block'>
        <div className='profile mt-11 mb-2 relative'> <Image
                            className='mobile:hidden select-none rounded-[50%]'
         src="https://res.cloudinary.com/dwohsn29d/image/upload/v1696745241/Portfolio/images/uls26z6z64kqaxccvnlh.jpg"width={100}
        height={100}
        alt="profile" />
        
 <Image
                            className='hidden mobile:block select-none rounded-[50%]'
         src="https://res.cloudinary.com/dwohsn29d/image/upload/v1696745241/Portfolio/images/uls26z6z64kqaxccvnlh.jpg"
        width={540}
        height={540}
        alt="profile" />
        <div data-tooltip-id="my-tooltip-1" className="hidden mobile:block cursor-pointer emoji absolute right-0 bottom-9 rounded-full bg-[#010409] border border-[#21262D] w-10 h-10 p-[10px] text-sm">😄</div>
      </div>
        <div className='mt-5 text-2xl mobile:text-[26px] font-bold mobile:font-semibold font-sans text-[#e6edf3]'>Osama Shaikh<span className='text-[#7d8590] font-normal text-xl'> . </span><span className='text-[#7d8590] font-normal text-lg mobile:text-xl'>he/him</span></div></div>
       <div  className=" mobile:hidden cursor-pointer emoji bg-[##0d1117] border border-[#21262D] w-full rounded-lg mt-5 px-2 py-[6px] text-sm">😄 <span className='text-[#e6edf3]'>learning!</span></div>
        <div className='text-[#e6edf3] mt-3'> Web Developer | Transforming Ideas into Code🧑‍💻</div>
        <div className='flex items-center justify-between gap-4 mt-5'>
          {/* <button className='border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Hire me</button> */}
                   <button  className='border border-[#383a3d2d] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border hover:border-[#6c717b] hover:bg-[#0D1117]' onClick={handleHireButtonClick}><Link href="/skills">Hire me</Link></button>
        {/* <button className='border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Resume</button> */}
        <button className='border  rounded-md  py-[6px] w-full text-[#e6edf3] font-medium border-[#6c717b] hover:bg-[#54575b62] hover:border-0'><a href="https://drive.google.com/file/d/1st2YyygA11pe3gBRKn2qwhKGR6hru2ED/view?usp=sharing">Resume</a></button>
        </div>
        {/* <h3 className='font-sans'>Copyright © {year} OS.</h3> */}
      </div>
      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="Learning!"
      />
      </>
  )
}

export default HeroProfile
{/* <Link href="/skills#ContactId" className='border border-[#383a3d2d] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border hover:border-[#6c717b] hover:bg-[#0D1117]'> Hire me</Link> */}
//  <Link href="/skills#ContactId" className='border border-[#383a3d2d] rounded-md bg-[#383a3d59] py-[6px] w-full text-[#e6edf3] font-medium hover:border hover:border-[#6c717b] hover:bg-[#0D1117]'> Hire me</Link>