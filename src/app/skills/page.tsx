"use client";
import React, { useRef,useEffect } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { IconsTypes, iconsData, tools } from "../utils/icons"
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import GoToTop from '../components/GoToTop';

const Skills:React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.scrollToContact) {
      contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
      window.scrollToContact = false;
    }
  }, []);
  return (
    <div className='text-white mx-4 lg:mx-[70px] xl:mx-32 mb-5  grid gap-5 midp:gap-10 md:gap-6 lg:gap-10 grid-cols-2 sm:grid-cols-3 midp:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 '>
      <div className='flex flex-col items-center justify-center pb-1 col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6'><h2 className='text-lg items-center font-headings tracking-wide py-3'> Languages & Framworks 💻</h2>
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
      <div className='flex flex-col items-center justify-center  pb-1 col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6'><h2 className='text-lg items-center font-headings tracking-wide py-3'> Tools 🧑‍💻</h2>
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
 <div className='flex flex-col items-center justify-center  pb-1 col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6'><h2 className='text-lg items-center tracking-wide py-3 font-headings'>Take a Coffee & Chat with ME 🤓 </h2>
        <div className='w-[100%] h-[1px] bg-[#2b2e33] '></div></div>
      <div ref={contactFormRef} className='border col-span-2 sm:col-span-3 midp:col-span-4 md:col-span-5 lg:col-span-6 border-[#3d3e41] rounded '>
        <ContactForm />
      </div>
      <SocialLinks />
      <GoToTop />
    </div>
  )
}

export default Skills