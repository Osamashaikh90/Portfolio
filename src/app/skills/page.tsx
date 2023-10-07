"use client";
import React, { useEffect } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { IconsTypes, iconsData, tools } from "../utils/icons"
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import GoToTop from '../components/GoToTop';

const Skills = () => {
  //  useEffect(() => {
  //   // Scroll to the section with the matching ID when the page loads
  //   const section = document.querySelector('#contactId');
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);
  return (
    <div className='text-white mx-4 mobile:mx-32 mb-5  grid gap-5 mobile:gap-10 grid-cols-2 mobile:grid-cols-6 '>
      <div className='flex flex-col items-center justify-center pb-1 col-span-2 mobile:col-span-6'><h2 className='text-lg items-center font-headings tracking-wide py-3'> Languages & Framworks 💻</h2>
          <div className='w-[100%] h-[1px] bg-[#2b2e33] '></div></div>
      {iconsData.map((icon: IconsTypes) => (
        <>
             <ReactTooltip
        id={icon.content}
            place="top"
            variant='light'
        content={icon.content}
      />
            <div key={icon.id}  data-tooltip-id={icon.content} className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${icon.style}`}>
              <img src={icon.src} alt="" className="w-20 mx-auto" />

          </div>
        </>))}
      <div className='flex flex-col items-center justify-center  pb-1 col-span-2 mobile:col-span-6'><h2 className='text-lg items-center font-headings tracking-wide py-3'> Tools 🧑‍💻</h2>
          <div className='w-[100%] h-[1px] bg-[#2b2e33] '></div></div>
      {tools.map((icon: IconsTypes) => (
            <><ReactTooltip
                id={icon.content}
          place="top"
          variant='light'
                content={icon.content} />
            <div  data-tooltip-id={icon.content} key={icon.id} className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${icon.style}`}>
        <img src={icon.src} alt="" className="w-20 mx-auto"/>
          </div>
        </>))}
 <div className='flex flex-col items-center justify-center  pb-1 col-span-2 mobile:col-span-6'><h2 className='text-lg items-center tracking-wide py-3 font-headings'>Take a Coffee & Chat with ME 🤓 </h2>
        <div className='w-[100%] h-[1px] bg-[#2b2e33] '></div></div>
      <div id='contactId' className='border col-span-2 mobile:col-span-6 border-[#3d3e41] rounded '>
        <ContactForm />
      </div>
      <SocialLinks />
      <GoToTop />
    </div>
  )
}

export default Skills