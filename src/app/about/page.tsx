/* eslint-disable react/no-unescaped-entities */
"use client";
import React,{useState} from 'react'
import Image from "next/image"
import { FaGraduationCap } from "react-icons/fa6"
import {MdWork} from "react-icons/md"
import {EducationDataTypes ,educationData} from '../utils/education'
import { WorkDataTypes, workData } from '../utils/work';
import WorkCard from '../components/WorkCard';
import EducationCard from '../components/EducationCard';
const About = () => {
const [activeTab,setActiveTab] = useState<'Qualification' | 'Work Experience'>('Qualification');

  const handleTabChange = (tabname:'Qualification' | 'Work Experience') => {
    setActiveTab(tabname);
  };

  return (
    <div className='text-white mx-24 '>
      <div className='w-full  flex items-center justify-center gap-20 p-5'>
        <div className="font-[Valencia] text-9xl">Osama</div>
        <div className=''><Image className='rounded-full grayscale hover:grayscale-0'
                    src="/images/osm4.jpg"
                    width={180}
                    height={180}
        alt="profile" /></div>
        <div className="font-[Valencia] text-9xl">Shaikh</div>
      </div>
      <div className='my-5 grid  grid-cols-2 gap-8 '>
        <div className='text-justify font-lora'><span className='font-tags text-xl'>{'<about>'}</span><br />
          <span>Heyya! I'm <span className="text-[#ff5f9e]">Osama</span> <span className="text-[#9cf5fd]" >Shaikh</span>, an aspiring engineering student specializing in Information Technology at Xavier Institute of Engineering, Mumbai University.</span>
          <br/><br/>
          I'm passionate about technology and thrive on finding innovative solutions to real-world problems. I'm a dedicated learner, always eager to stay updated with the latest tech trends. In my free time, I enjoy exploring the dynamic tech world to stay at the forefront.
<br/><br/>
My expertise lies in web development, where I craft visually appealing and user-friendly websites. I'm committed to turning ideas into robust websites that stand out in the digital realm.
          <br />
          <span className='font-tags text-xl'>{'</about>'}</span>

</div>
        <div className='outer '>
          <div className='tab'>
            <div className='buttons flex gap-10 cursor-pointer items-center justify-center'>
              <span className={`flex items-center gap-1 hover:text-[#a2a9b4] ${activeTab === 'Qualification'?'text-[#a2a9b4]':''}`} onClick={()=>handleTabChange('Qualification')}><FaGraduationCap />Qualification</span>
              <span className={`flex items-center gap-1 hover:text-[#a2a9b4] ${activeTab === 'Work Experience' ? 'text-[#a2a9b4]' : ''}`} onClick={()=>handleTabChange('Work Experience')}><MdWork />Work-Experiance</span></div></div>
          <div className='section  '>
            {/* --qualification-- */}
             {activeTab === 'Qualification' && (
              <div className="data mx-24 mt-5  grid grid-container relative ">
                 
              {educationData.map((education: EducationDataTypes) => (
              <EducationCard key={education.id} education={education} />
              ))}
              
              <div className="w-px bg-[#9cf5fd] h-[95%] top-3 absolute -translate-x-2/4 left-2/4 inset-y-0"></div>
          </div>
          )}
              {/* ---- */}
          {/* work */}
          {activeTab === 'Work Experience' && (
             <div className="data mx-24 mt-5  grid grid-container relative ">
                 
              {workData.map((work: WorkDataTypes) => (
              <WorkCard key={work.id} work={work} />
              ))}
              
              <div className="w-px bg-[#9cf5fd] h-[95%] top-3 absolute -translate-x-2/4 left-2/4 inset-y-0"></div>
              </div>
            
              )}
          </div>
        </div>
      </div>
     </div>
  )
}

export default About