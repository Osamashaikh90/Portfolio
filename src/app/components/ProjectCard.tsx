"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className='py-2 mx-2 w-[98%] flex flex-col '> 
          <div className="grid gap-5 grid-cols-2">
            <div className='flex flex-col gap-y-2'>
              <span className='flex items-center gap-2'><a href={project.source_code}><h3 className='text-[#2f81f7] font-sans font-semibold text-xl cursor-pointer hover:underline'>{ project.name}</h3></a>
                <span className='border border-[#2b2e33] rounded-2xl px-2 py-[1px] font-sans text-[#7d8590] text-xs font-semibold'>{ project.visibility}</span>
          </span>
          <div className='tag py-1 flex gap-[2px]'>
                 {project.tags.map((tag:any) => (
                   
              <span key={tag} className=' rounded-2xl  px-3 py-[3px] text-blue-600 font-sans bg-[#2f82f72b] text-sm font-semibold hover:bg-[#2f81f7] hover:text-[#e6edf3]'>
              {tag}
              </span>
        
          ))}
                
          </div>
          <div className='font-mono '>
            {project.description}
          </div>
          <div className='flex items-center gap-2'>
            <span className={`h-3 w-3 rounded-full ${project.language}`}></span>{project.language}
              </div>
              {/* <div> */}
                      {/* <button className='border border-[#2b2e33] rounded-md bg-[#383a3d59] py-1 mt-1 w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Live</button> */}
            {/* </div>
            
             */}
              </div>
            <div className='flex flex-col items-end justify-center '>
              <Image
                            className=' '
                            src={project.image}
                            width={300}
                            height={300}
                alt="profile" />
                      <Link href={project.live_link} target='_blank'><button className='border border-[#2b2e33] bottom-[-1] rounded-md bg-[#383a3d59] py-1 mt-1 w-full text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Live</button></Link>
              
            </div>
          </div>
         
        </div>
        </>
  )
}

export default ProjectCard