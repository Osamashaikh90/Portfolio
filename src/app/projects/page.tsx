"use client"
import React, { useState } from 'react'
import { GoRepo } from 'react-icons/go'
import {TiArrowSortedDown } from 'react-icons/ti'
import HeroProfile from '../components/HeroProfile'
import ProjectCard from '../components/ProjectCard'
import { projectData,ProjectDataTypes } from '../utils/projectData'

const Projects = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='text-white mx-24  grid gap-5 grid-cols-8'>
      <HeroProfile />
      <div className='col-start-3 col-end-9 mt-6'>
        <div className='flex gap-5 px-2 items-center justify-start'>
          <input type="search" name="projects" id="" className='bg-inherit border border-[#363a40] w-[55%] py-[6px] text-sm h-[34px] px-[10px] text-[#7d8590] rounded-md focus:ring-blue-600 outline-blue-600' placeholder='Find a project..' onChange={(e) => setSearch(e.target.value)}/>
            <div className='flex gap-1'>
              <span><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-5 w-full text-[#c9d1d9] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Type <span className="mt-1"><TiArrowSortedDown /></span></button></span>
              <span><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-5 w-full text-[#c9d1d9] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Language <span className="mt-1"><TiArrowSortedDown /></span></button></span>
              <span><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-5 w-full text-[#c9d1d9] font-medium hover:border-[#6c717b] hover:bg-[#54575b62]'>Sort <span className="mt-1"><TiArrowSortedDown /></span></button></span>
          </div>
          <button className=' rounded-md bg-[#238636] py-[5px] px-3  text-[#e6edf3] font-medium hover:border-[#6c717b] hover:bg-[#54575b62] flex items-center gap-1'><GoRepo className="font-semibold" /> New</button>
          </div>
          <div>
          {projectData
            .filter((project: ProjectDataTypes) =>
              search.toLowerCase() === '' || project.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((project: ProjectDataTypes) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className='w-[98%] my-5 mx-2 h-[1px] bg-[#2b2e33]'></div>
        </div>
        </div>
  )
}


export default Projects