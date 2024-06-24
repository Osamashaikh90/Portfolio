"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye } from "react-icons/fa";
interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: Array<string>;
  source_code: string;
  live_link: string;
  language: string;
  visibility: string;
}

interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <>
      <div className='w-[98%] my-5 mx-2 h-[1px] bg-[#2b2e33]'></div>
      {/* ------------------------------------------------------------------ */}
      <div className='py-[6px] mx-2 w-[98%] flex flex-col '>
        <div className="grid gap-5 grid-cols-1 midp:grid-cols-3 ">
          <div className='flex flex-col gap-y-2 col-span-1 midp:col-span-2 order-2 midp:order-1'>
            <span className='flex items-center gap-2'><a href={project.source_code}><h3 className='text-[#2f81f7] font-sans font-semibold text-xl cursor-pointer hover:underline'>{project.name}</h3></a>
              <span className='border border-[#2b2e33] rounded-2xl px-2 py-[1px] font-sans text-[#7d8590] text-xs font-semibold'>{project.visibility}</span>
            </span>
            <div className='font-mono text-[#7d8590] '>
              {project.description}
            </div>
            <div className='tag py-1 flex flex-wrap gap-[2px]'>
              {project.tags.map((tag: any) => (

                <span key={tag} className='cursor-pointer rounded-2xl  px-3 py-[3px] text-blue-600 font-sans bg-[#2f82f72b] text-sm font-semibold hover:bg-[#2f81f7] hover:text-[#e6edf3]'>
                  {tag}
                </span>

              ))}

            </div>

            <div className='flex text-[#7d8590] text-sm items-center gap-[2px]'>
              <span className={`h-3 w-3  rounded-full ${project.language}`}></span>{project.language}
            </div>
          </div>
          <div className=' flex flex-col items-center midp:items-end  justify-center order-1 midp:order-2'>
            <div className="relative group">
              <Image
                className="select-none object-cover"
                src={project.image}
                width={260}
                height={260}
                alt="profile" />
              <Link href={project.live_link} target='_blank'>        <div className="overlay absolute left-8 right-[30px] top-4 bottom-5  inset-0 opacity-0 transition-opacity duration-400 ease-in-out bg-[#0d1117] cursor-pointer group-hover:opacity-80 group-hover:rounded">

                <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#e6edf3] font-lora text-center">
                  <h3 className = "flex justify-center items-center col gap-2"><FaEye/>LIVE</h3>
                </div>
              </div></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
// bg-[#232323b6]