import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import Link from 'next/link';
import { BlogDataTypes } from '../utils/blogData';

interface BlogCardProps {
    blog: BlogDataTypes
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <>
            <div key={blog.id} className='flex flex-col gap-5'>
                <div className="w-[100%] h-[1px] bg-[#2b2e33]"></div>
                <div className='flex items-center gap-5 text-[#00eeff]'>
                    <span className='flex flex-col'>
                        <span className='h-[2px] rounded-sm w-32 bg-[#00eeff]'></span>
                        <span className='h-2 w-16 boat bg-[#00eeff]'></span></span>
                    <span>{blog.date}</span>
                </div>
                <h2 className='text-lg'>{blog.title}</h2>
                <p className='text-xs text-neutral-400'>{blog.description}</p>
                <div className='flex items-center justify-between'>
                    <Link href={blog.blog_source}>
                        <span className='text-[#00eeff] flex items-center gap-2 cursor-pointer'>
                            <IoChevronForwardSharp />
                            Read blog
                        </span>
                    </Link>
                    <span className='text-sm'>
                        {blog.time}
                    </span>
                </div>

            </div>


        </>
    )
}

export default BlogCard