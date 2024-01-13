"use client"
import React from 'react'
import HeroProfile from './HeroProfile'
import { GoPencil } from "react-icons/go"
import Writer from './Writer'
import { Tooltip as ReactTooltip } from "react-tooltip";
const Hero = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <div className='text-white mx-5  lg:mx-24 grid gap-5 grid-cols-1  md:grid-cols-8'>
      <HeroProfile/>
      <div className='col-span-1 md:col-start-3 md:col-end-9 h-full  border border-[#2b2e33] mt-[34px] mx-1 px-2 rounded-[6px]'>
        <div className="top flex items-center justify-between my-6 mx-4 font-mono text-sm"><span>Osama shaikh<span className='text-[#7d8590]'>/</span>README<span className='text-[#7d8590]'>.md</span> </span><span className='text-lg text-[#7d8590] hover:text-blue-700 cursor-pointer ' data-tooltip-id="edit"><GoPencil /></span>
      </div>
        <div className='flex justify-center flex-col relative h-[50vh] px-3'>
          <div className="hidden md:block  bg md:text-7xl lg:text-8xl xl:text-9xl  font-background md:leading-normal lg:leading-snug xl:leading-[1.35] select-none  text-[#383a3d46] absolute z-[-1] tracking-wide">
             <h1>I BUILD</h1>
          <h1>WEB APPS</h1>
          </div>
          <div className="foreground flex justify-start items-center  z-[2] text-[#ffc0b5]">
            <div className="content px-3 pt-10 flex flex-col gap-y-5 ">
              <h1 className='name text-[#e6edf3] md:text-3xl xl:text-4xl font-medium mb-2'><span className='text-[#7d8590]'>Hi</span> there!<span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></h1>
              <h1 className='name text-[#e6edf3] md:text-4xl xl:text-5xl font-medium mb-2 uppercase font-sans '><span className='text-[#ff5f9e] leading-normal md:leading-none '>I am  </span>Osama Shaikh</h1>
              <h6 className='bio text-[#e6edf3] text-2xl font-light mb-9 flex gap-4'>A <span className='font-typewriter'>
                <Writer className="text-[#9cf5fd]"/></span>
              </h6>
            </div>

          </div>
      </div>
        <div className='flex items-center justify-center flex-col gap-y-4 mt-2'>
          <h2 className=' items-center font-serif tracking-wide'> Connect with me 🫂</h2>
          <div className='w-[90%] h-[1px] bg-[#2b2e33]'></div>
            <div className='flex gap-5 md:gap-40 items-center flex-wrap justify-center md:justify-between'>
              
<p className='flex items-center  gap-2'>
<a href="https://www.linkedin.com/in/osama-shaikh-8641a5211/"><img src="https://img.shields.io/badge/LinkedIn-000080?style=for-the-badge&logo=linkedin&logoColor=white"/></a> 
<a href="https://www.instagram.com/osamashaikh_786/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/></a> 
            <a href="https://dev.to/osamashaikh90"><img src="https://img.shields.io/badge/dev-%23000000.svg?style=for-the-badge&logo=dev&logoColor=white" /></a>
<a href="https://twitter.com/Osamash03705044"><img src="https://img.shields.io/badge/Twitter-0099ff?style=for-the-badge&logo=twitter&logoColor=white"/></a> 
<a href="mailto:shaikhosama499@gmail.com"><img src="https://img.shields.io/badge/mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
          </p>
          <h3 className='font-sign md:hidden'>© {year} <span className='font-sign'>Osama Shaikh</span></h3>
          </div> 
          </div>
      </div>
      <ReactTooltip
        id="edit"
        place="bottom"
        content="You Shouldn't edit someone's readme🤨"
      />
    </div>
  )
}

export default Hero
