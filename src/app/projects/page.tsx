"use client"
import React, { useState } from 'react'
import { GoRepo } from 'react-icons/go'
import { TiArrowSortedDown } from 'react-icons/ti'
import HeroProfile from '../components/HeroProfile'
import ProjectCard from '../components/ProjectCard'
import { projectData, ProjectDataTypes } from '../utils/projectData'
import SocialLinks from '../components/SocialLinks'
import GoToTop from '../components/GoToTop'
const Projects = () => {
  const [search, setSearch] = useState('');
  const [showLang, setShowLang] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showType, setShowType] = useState(false);
  const [originalData, setOriginalData] = useState<ProjectDataTypes[]>(projectData);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const handleClickSort = () => {
    setShowSort(!showSort);

  }
  const handleClickLang = () => {
    setShowLang(!showLang);

  }
  const handleClickType = () => {
    setShowType(!showType);

  }

  const filterItem = (categItem: string) => {
    const updatedItems = projectData.filter((currElem) => {
      return currElem.language === categItem;

    })
    setOriginalData(updatedItems);
    setShowLang(!showLang);
  };

  const filterByVisible = (categItem: string) => {
    const updatedItems = projectData.filter((currElem) => {
      return currElem.visibility === categItem;

    })
    setOriginalData(updatedItems);
    setShowType(!showType);
  };
  //sorting by name
  const sortData = () => {
    const sortedData = [...originalData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setOriginalData(sortedData);
    setShowSort(!showSort);
  };


  return (
    <div className='text-white mx-5 md:mx-24 grid gap-5 grid-cols-1 md:grid-cols-8'>
      <HeroProfile />
      <div className='col-span-1 md:col-start-3 md:col-end-9 mt-6'>
        <div className='flex gap-6 px-2 items-center flex-wrap md:flex-nowrap justify-start'>
          <button className=' rounded-md bg-[#1f6feb] py-[5px] px-3 w-full md:hidden hover:bg-[#388BFD] text-[#e6edf3] font-medium hover:border-[#6c717b]  flex items-center justify-center gap-1'><GoRepo className="font-semibold" /> New</button>
          <input type="search" name="projects" id="" className='bg-inherit border border-[#363a40] w-full md:w-[55%] py-[6px] text-sm h-[34px] px-[10px] text-[#7d8590] rounded-md focus:ring-blue-600 outline-blue-600' placeholder='Find a project..' onChange={(e) => setSearch(e.target.value)} />
          <div className='flex gap-1 mt-[-10px] md:mt-0'>
            <span><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-3 md:px-5 w-full text-[#c9d1d9] text-sm font-medium hover:border-[#6c717b] hover:bg-[#54575b62]' onClick={handleClickType}>Type <span className="mt-1"><TiArrowSortedDown /></span></button>
              <div className={`remCard absolute    flex flex-col text-[#e6edf3] bg-[#161B21] border-[#31363C] border shadow-lg shadow-black text-sm z-10  mt-2 w-28 rounded ${showType ? "block" : "hidden"}`}>
                <div className="pages flex justify-between items-center flex-col gap-2 py-3 px-3 ">
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded ' onClick={() => [setOriginalData(projectData), setShowType(!showType)]}>All</button>
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={() => filterByVisible("Public")}>Public</button>
                  <button className='w-full cursor-pointer  hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={() => filterByVisible("Private")} >Private</button>
                </div>
              </div>
            </span>
            <span className='relative'><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-3 md:px-5 w-full text-[#c9d1d9] text-sm font-medium hover:border-[#6c717b] hover:bg-[#54575b62]' onClick={handleClickLang}>Language <span className="mt-1"><TiArrowSortedDown /></span>
            </button>
              <div className={`remCard absolute   flex flex-col text-[#e6edf3] bg-[#161B21] border-[#31363C] border shadow-lg shadow-black text-sm z-10  mt-2 w-32 rounded ${showLang ? "block" : "hidden"}`}>
                <div className="pages flex items-center flex-col gap-2 py-3 px-3 ">
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded ' onClick={() => [setOriginalData(projectData), setShowLang(!showLang)]}>All</button>
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={() => filterItem("JavaScript")}>JavaScript</button>
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={() => filterItem("TypeScript")}>TypeScript</button>

                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={() => filterItem("Java")} >Java</button>
                </div>
              </div>

            </span>
            <span><button className='flex items-center gap-1 border border-[#2b2e33] rounded-md bg-[#383a3d59] py-[5px] px-3 md:px-5 w-full text-[#c9d1d9] text-sm font-medium hover:border-[#6c717b] hover:bg-[#54575b62]' onClick={handleClickSort}>Sort <span className="mt-1"><TiArrowSortedDown /></span></button>
              <div className={`remCard absolute    flex flex-col text-[#e6edf3] bg-[#161B21] border-[#31363C] border shadow-lg shadow-black text-sm z-10  mt-2 w-24 rounded ${showSort ? "block" : "hidden"}`}>
                <div className="pages flex justify-between items-center flex-col gap-2 py-2 px-3 ">
                  <button className='w-full cursor-pointer hover:bg-[#21262dc5] py-[2px] hover:rounded' onClick={sortData} >Name</button>
                </div>
              </div>
            </span>
          </div>
          <span className='hidden md:block'> <button className=' rounded-md hover:bg-[#388BFD] bg-[#1f6feb]  py-[5px] px-3  text-[#e6edf3] font-medium hover:border-[#6c717b]  flex items-center gap-1'><GoRepo className="font-semibold" /> New</button></span>
        </div>
        <div>
          {originalData
            .filter((project: ProjectDataTypes) =>
              search.toLowerCase() === '' || project.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((project: ProjectDataTypes) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
        <div className='w-[98%] my-5 mx-2 h-[1px] bg-[#2b2e33]'></div>
      </div>
      <SocialLinks />
      <GoToTop />
    </div>
  )
}


export default Projects
