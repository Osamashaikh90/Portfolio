"use client";
import React, { useState} from 'react'
import { usePathname } from 'next/navigation';
import { AiOutlineMenu,AiFillStar } from "react-icons/ai"
import { FiSearch,FiInbox } from "react-icons/fi"
import { BiPlus,BiGitPullRequest } from "react-icons/bi"
import {BsThreeDots} from "react-icons/bs"
import { TiArrowSortedDown } from "react-icons/ti"
import { LiaDotCircle } from "react-icons/lia"
import { GoBook,GoRepo,GoTable,GoPackage,GoStar,GoCommandPalette } from "react-icons/go"
import {CgGitFork} from "react-icons/cg"
import Image from 'next/image';
import Link from 'next/link';
import ProjectCounter from './ProjectCounter';
import { Tooltip as ReactTooltip } from "react-tooltip";
import SideBar from './SideBar';
const Navbar = () => {
    const pathname = usePathname() as any;
    const [isDisabled, setDisabled] = useState(false);
    const [isVisible, setVisible] = useState(false);
      const [isSidebarOpen, setSidebarOpen] = useState(false);
    //   const showSidebar = () => setSidebarOpen(!isSidebarOpen);
    const showMenu = () => setVisible(!isVisible);
    const sideDrawerClosedHandler = () => {
        setSidebarOpen(false);
        document.body.style.overflow = 'unset';
    }
    const showSidebar = () => {
        setSidebarOpen(true);
        document.body.style.overflow = 'hidden';
    }

    return (
      <>
            <div className='h-[108px] flex  items-center justify-center flex-col border-y border-[#21262D] text-[#e6edf3] bg-[#010409]'>
                <div className='p-3 flex items-center justify-between w-full '>
                    <div className="left text-lg mt-[7px] ml-[7px] flex gap-[18px] justify-between items-center">
                        <button onClick={showSidebar} className='border border-[#2b2e33] p-2 rounded-md hover:border-[#6c717b] '>< AiOutlineMenu className=" text-[#7d8590] font-extrabold" /></button>
                        <SideBar isOpen={isSidebarOpen} closeSidebar={sideDrawerClosedHandler} />
                       <Link href="/"> <Image
                            className='rounded-full '
                            src="/images/OSlogo.jpg"
                            width={35}
                            height={35}
                            alt="Github logo"/></Link>
                           <Link href="/"> <span className='text-sm p-[6px] font-semibold text-[#e6edf3] tracking-wide font-sans hover:bg-[#21262d8f] hover:rounded-lg '>Osamashaikh90</span>
                    </Link>
                    </div>
                    <div className="right flex gap-[10px] justify-between items-center w-[32%] mobile:w-[40%]">
                        <div className='text-[#7d8590] text-xl border border-[#363a40] rounded-md w-[25%] mobile:w-[70%]  flex items-center p-1 gap-1 hover:border-[#6c717b] active:border-[#363a40]'>
                            <span className='text-[#7d8590] text-lg px-1 '><FiSearch /></span>
                            <input
                                 onClick={(e)=> setDisabled(!isDisabled)}
                                    disabled={isDisabled}
                                type="search" name="search" id="" className='w-0 mobile:w-[90%] bg-inherit border-0 !outline-none text-base font-extralight disabled ' placeholder='Type here to search' /><span className='text-[#454b55] text-lg hidden mobile:block'>|</span><span className='hidden mobile:block'><GoCommandPalette/></span></div>
                        <span className='text-[#454b55] text-2xl hidden mobile:block'>|</span>
                        <span className='hidden mobile:block'><span className='text-[#7d8590] text-xl border border-[#363a40] rounded-md p-[6px] flex gap-1 hover:border-[#6c717b] active:border-[#363a40] hover:bg-[#54575b62] cursor-pointer '><BiPlus /><TiArrowSortedDown /></span></span>
                        <span className='text-[#7d8590] text-2xl border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] cursor-pointer hidden mobile:block'><LiaDotCircle/></span>
                        <span className='text-[#7d8590] text-2xl border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] cursor-pointer hidden mobile:block'><BiGitPullRequest/></span>
                        <span className='text-[#7d8590] text-2xl border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] cursor-pointer'><FiInbox/></span>
                        <span className='text-[#7d8590] text-[26px]  rounded-[50%] border border-[#363a40]  hover:border-[#6c717b]'>
                            <Image
                            className='rounded-[50%]'
                            src="/images/osama.png"
                            width={35}
                            height={35}
                            alt="profile"/>
                        </span>
                    </div>
                </div>
                {/* ----------------------------------2nd nav------------------------------------------------------------ */}
                <div className='p-2 flex justify-between items-center w-full relative'>
                    <ul className='flex gap-5 justify-between mx-4 '>
                        <Link href="/"><li className={`flex gap-2 items-center hover:bg-[#21262d8f] active:bg-[#21262d8f]  hover:rounded-lg p-1 relative `}><span className={`text-lg text-[#7d8590] font-semibold ${pathname === '/' ? 'after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-[#F78166] after:left-0 after:top-full after:rounded-lg after:block' : ''}`}><GoBook className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Overview</span></li></Link>
                        <Link href="/projects"><li className={`flex gap-2 items-center  hover:bg-[#21262d8f] hover:rounded-lg p-1 relative`}><span className={`text-lg text-[#7d8590] font-semibold ${pathname === '/projects' ? 'after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-[#F78166] after:left-0 after:top-full after:rounded-lg after:block' : ''}`}><GoRepo className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Projects</span> <span className=' rounded-xl px-2 py-[1px] font-sans text-[#e6edf3] bg-[#30363d] text-xs font-bold'><ProjectCounter /></span></li></Link>
                    <Link className='\' href="/skills"><li className='flex gap-2 items-center  hover:bg-[#21262d8f] hover:rounded-lg p-1 relative'><span className={`text-lg text-[#7d8590] font-semibold ${pathname === '/skills' ? 'after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-[#F78166] after:left-0 after:top-full after:rounded-lg after:block' : ''}`}><GoTable className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Skills</span></li></Link>
                    <Link className='hidden mobile:block' href="/about"><li className='flex gap-2 items-center  hover:bg-[#21262d8f] hover:rounded-lg p-1 relative'><span className={`text-lg text-[#7d8590] font-semibold ${pathname === '/about' ? 'after:content-[""] after:absolute after:h-[2px] after:w-full after:bg-[#F78166] after:left-0 after:top-full after:rounded-lg after:block' : ''}`}><GoStar className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>About</span></li></Link>
                       <a className='hidden mobile:block' href="https://dev-diaries-kappa.vercel.app/"><li className='flex gap-2 items-center  hover:bg-[#21262d8f] hover:rounded-lg p-1'><span className='text-lg text-[#7d8590] font-semibold'><GoPackage className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Blogs</span></li></a> 
                    <a href="https://github.com/Osamashaikh90"
                            target='_blank'
                            data-tooltip-id='git'
                        className='hidden mobile:block'>
                        <button className='flex gap-2 items-center border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] mb-[1px]'>
                <CgGitFork />{" "}<AiFillStar />
                        </button></a>
                    </ul>
                    
                    <div className='mobile:hidden text-xl   relative text-[#7d8590] mr-2 flex items-center  rounded-[3px]'>
                        <span onClick={showMenu}><BsThreeDots /></span>
                        <div className={`remCard absolute  ml-[-400%]  flex flex-col text-[#e6edf3] bg-[#161B21] border-[#31363C] border shadow-md shadow-black text-sm z-10  mt-[106px] w-28 rounded ${isVisible? 'block' : 'hidden'}`}>
                            <div className="pages flex justify-between items-center flex-col gap-2 py-3 px-5 ">
                               <span className='w-full'><Link href="/about" className=''> About</Link></span>
                                <span className='w-full'><Link href="https://dev-diaries-kappa.vercel.app/" className=''>Blogs</Link></span>
                            </div>
                        </div> 
                       
                </div>
                </div>
            </div>

             <ReactTooltip
        id="git"
        place="bottom"
        content="Github"
      />
        </>
    )
}

export default Navbar
//  shadow-[#303030c0_0px_1px_2px_0px,#adadad65_0px_1px_3px_1px]


