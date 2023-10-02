import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin,FaDev,FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi";
import { GoBook, GoRepo, GoTable, GoPackage, GoStar, GoX,GoCommentDiscussion } from "react-icons/go"
import ProjectCounter from './ProjectCounter'

interface SideBarProps {
    isOpen: boolean;
    closeSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, closeSidebar }) => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className={`flex flex-col gap-5 border-[1px]  border-[#21262D] z-10  mobile:w-[22%] shadow-black shadow-xl rounded-tr-2xl rounded-br-2xl fixed top-0 left-0 h-screen bg-[#161b22] ${isOpen ? 'translate-x-0 duration-300' : '-translate-x-full duration-150'}`}>
      <div className="logo left text-lg mt-[15px] ml-4 flex gap-[18px] justify-between items-center">
                       <Link href="/"> <Image
                            className='rounded-full '
                            src="/images/OSlogo.jpg"
                            width={35}
                            height={35}
          alt="Github logo" /></Link>
        <span className=' rounded-lg text-[#7d8590] font-bold hover:bg-[#30363D] hover:duration-300 text-xl cursor-pointer mr-[18px] mt-[2px] p-2' onClick={closeSidebar}><GoX/></span>
      </div>
      <div className="pages mx-3 overflow-y-auto">
        <ul className='flex flex-col gap-1 justify-between mr-4 '>
                        <Link href="/"><li className='flex gap-2 items-center overflow-y-auto  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoBook className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Overview</span></li></Link>
                   <Link href="/projects"><li className='flex gap-2 items-center  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoRepo className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Projects</span> <span className=' rounded-xl px-2 py-[1px] font-sans text-[#e6edf3] bg-[#30363d] text-xs font-bold'><ProjectCounter /></span></li></Link>
                    <Link className='\' href="/skills"><li className='flex gap-2 items-center  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoTable className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Skills</span></li></Link>
                    <Link className='' href="/about"><li className='flex gap-2 items-center  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoStar className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>About</span></li></Link>
                       <a className='' href="https://dev-diaries-kappa.vercel.app/"><li className='flex gap-2 items-center  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoPackage className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Blogs</span></li></a> 
                 
        </ul>
      </div>
      <div className='w-[95%] mx-1 h-[1px] bg-[#2b2e33] '></div>
      <div className="social mx-3">
 <ul className='flex flex-col gap-1 justify-between mr-4'>
                        <Link href="https://www.linkedin.com/in/osama-shaikh-8641a5211/"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><FaLinkedin className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>LinkedIn</span></li></Link>
                        <Link href="https://github.com/Osamashaikh90/"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><FaGithub className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Github</span></li></Link>
                        <Link href="mailto:shaikhosama499@gmail.com"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><HiOutlineMail className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>E-mail</span></li></Link>
                        <Link href="https://twitter.com/Osamash03705044"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><FaXTwitter className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Twitter</span></li></Link>
                        <Link href="https://dev.to/osamashaikh90"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><FaDev className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Dev.to</span></li></Link>
                        <Link href="https://www.instagram.com/osamashaikh_786/"><li className='flex gap-2 items-center   hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><FaInstagram className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Instagram</span></li></Link>
        </ul>
      </div>
      <div className='w-[95%] mx-1 h-[1px] bg-[#2b2e33] '></div>
      <div className="copyright mx-3">
        <ul className='flex flex-col gap-1 justify-between mr-4'>
             <Link className='\' href=""><li className='flex gap-2 items-center  hover:bg-[#30363D] hover:rounded-lg p-2'><span className='text-lg text-[#7d8590] font-semibold'><GoCommentDiscussion className="font-bold"/></span><span className=' text-[#e6edf3] text-sm flex items-center justify-between gap-36'>Discussion<span className='border  rounded-xl text-xs font-semibold px-[6px] py-[2px] bg-[#0D1016] text-[#57A6FE] border-[#266EDD]'>Beta</span></span></li></Link>
         </ul>
         <h3 className='font-sign p-2 text-[#7d8590]'>© {year} <span className='font-sign text-[#e6edf3]'>Osama Shaikh</span></h3>
</div>


    </div>
  )
}

export default SideBar