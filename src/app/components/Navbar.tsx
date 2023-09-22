"use client";
import React,{  useState } from 'react'
import { AiOutlineMenu,AiFillStar } from "react-icons/ai"
import { FiSearch,FiInbox } from "react-icons/fi"
import { BiPlus,BiGitPullRequest } from "react-icons/bi"
import { TiArrowSortedDown } from "react-icons/ti"
import { LiaDotCircle } from "react-icons/lia"
import { GoBook,GoRepo,GoTable,GoPackage,GoStar } from "react-icons/go"
import {CgGitFork} from "react-icons/cg"
import {IoIosArrowForward} from "react-icons/io"
import Image from 'next/image';
import Link from 'next/link';
import ProjectCounter from './ProjectCounter';
const Navbar = () => {
    const [isDisabled, setDisabled] = useState(false);
//inside render
    return (
      <>
            <div className='h-[108px] flex items-center justify-center flex-col border-y border-[#21262D] text-[#e6edf3] bg-[#010409]'>
                <div className='p-3 flex items-center justify-between w-full '>
                    <div className="left text-lg mt-[7px] ml-[7px] flex gap-[18px] justify-between items-center">
                        <button className='border border-[#2b2e33] p-2 rounded-md hover:border-[#6c717b] '>< AiOutlineMenu className=" text-[#7d8590] font-extrabold" /></button>
                       <Link href="/"> <Image
                            className='invert'
                            src="/images/github.svg"
                            width={35}
                            height={35}
                            alt="Github logo"/></Link>
                           <Link href="/"> <span className='text-sm p-[6px] font-semibold text-[#e6edf3] tracking-wide font-sans hover:bg-[#21262d8f] hover:rounded-lg '>Osamashaikh90</span>
                    </Link>
                    </div>
                    <div className="right flex gap-[10px] justify-between items-center w-[40%]">
                        <div className='text-[#7d8590] text-xl border border-[#363a40] rounded-md w-[70%]  flex items-center p-1 gap-1 hover:border-[#6c717b] active:border-[#363a40]'>
                            <span className='text-[#7d8590] text-lg px-1 '><FiSearch /></span>
                            <input
                                 onClick={(e)=> setDisabled(!isDisabled)}
                                    disabled={isDisabled}
                                type="search" name="search" id="" className='w-[90%] bg-inherit border-0 !outline-none text-base font-extralight disabled ' placeholder='Type here to search' /><span className='text-[#454b55] text-base'>|</span><span className='text-[#454b55] flex gap-0 text-base items-center justify-center font-semibold'><IoIosArrowForward />_</span></div>
                        <span className='text-[#454b55] text-xl'>|</span>
                        <span className='text-[#7d8590] text-xl border border-[#363a40] rounded-md p-[6px] flex gap-1 hover:border-[#6c717b] active:border-[#363a40] hover:bg-[#54575b62] cursor-pointer'><BiPlus /><TiArrowSortedDown /></span>
                        <span className='text-[#7d8590] text-2xl border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] cursor-pointer'><LiaDotCircle/></span>
                        <span className='text-[#7d8590] text-2xl border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] cursor-pointer'><BiGitPullRequest/></span>
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
                <div className='p-3 flex justify-start w-full'>
                    <ul className='flex gap-5 justify-between mx-4'>
                        <Link href="/"><li className='flex gap-2 items-center '><span className='text-lg text-[#7d8590] font-semibold'><GoBook className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Overview</span></li></Link>
                   <Link href="/projects"><li className='flex gap-2 items-center'><span className='text-lg text-[#7d8590] font-semibold'><GoRepo className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Projects</span> <span className=' rounded-xl px-2 py-[1px] font-sans text-[#e6edf3] bg-[#30363d] text-xs font-bold'><ProjectCounter /></span></li></Link>
                    <Link href="/skills"><li className='flex gap-2 items-center'><span className='text-lg text-[#7d8590] font-semibold'><GoTable className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Skills</span></li></Link>
                    <Link href="/about"><li className='flex gap-2 items-center'><span className='text-lg text-[#7d8590] font-semibold'><GoStar className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>About</span></li></Link>
                       <a href="https://dev-diaries-kappa.vercel.app/"><li className='flex gap-2 items-center'><span className='text-lg text-[#7d8590] font-semibold'><GoPackage className="font-bold"/></span><span className=' text-[#e6edf3] text-sm'>Blogs</span></li></a> 
                    <a
                            href="https://github.com/Osamashaikh90"
                            target='_blank'
    className="transititext-primary text-primary transition duration-0 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    data-te-toggle="tooltip"
    title="Github"
    >
                        <button className='flex gap-2 items-center border border-[#363a40] rounded-md p-1 hover:border-[#6c717b] hover:bg-[#54575b62] mb-[1px]'
                // className="fork-btn-inner"
              >
                <CgGitFork   />{" "}
                            <AiFillStar />
                            
                        </button> </a>
                    </ul>
                </div>
    </div>
        </>
    )
}

export default Navbar