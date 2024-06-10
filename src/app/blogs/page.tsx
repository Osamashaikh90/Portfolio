"use client"
import React from 'react';
import Link from "next/link";
import BlogCard from '../components/BlogCard';
import { BlogDataTypes, BlogData } from '../utils/blogData';
import ComingSoon from '../components/ComingSoon';
const Blogs = () => {

  const style: React.CSSProperties = {
    color: "#151513",
    position: "absolute",
    top: "-40px",
    border: 0,
    left: "-45px",
    transform: "scale(-1,1)",
    zIndex: 9999
  };

  const style2: React.CSSProperties = {
    transformOrigin: "130px 106px"
  };

  return (
    <>
      <div className="blog relative">
        <div className="absolute curve top-0 left-0 h-[90px] w-[90px] triangle cursor-pointer">
          <Link href="https://github.com/Osamashaikh90"><svg width="85" height="85" viewBox="0 0 250 250" style={style} aria-hidden="true">
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={style2}
              className="octo-arm wave"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
          </Link>
        </div>
        <div className="text-white  mx-4 md:mx-32 mb-2 grid  grid-cols-2 sm:grid-cols-3 midp:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {/* Section Heading */}
          <div className="flex flex-col gap-2 xxsm:items-center sm:items-start justify-center pt-10 pb-2 col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6">
            <h2 className="text-5xl items-center font-headings font-bold tracking-wide py-3">Blogs📜 </h2>
          </div>
          <div className=' flex flex-col gap-8 col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6'>
            {BlogData?.map((blog: BlogDataTypes) => {
              return (
                <BlogCard key={blog.id} blog={blog} />
              )
            })}
            <ComingSoon />
            
            <div className="w-[100%] h-[1px] bg-[#2b2e33]"></div>
          </div>
        </div>
      </div>
    </>





  )
}

export default Blogs