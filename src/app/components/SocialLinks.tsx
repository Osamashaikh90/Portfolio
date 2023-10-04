import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi";
const SocialLinks = () => {


  const links = [
    {
      id: 1,
      name:"linkedIn",
      child: (
        <>
           <FaLinkedin size={26} />
        </>
      ),
      href: "https://www.linkedin.com/in/osama-shaikh-8641a5211/",
      style: "hover:text-blue-400",
      content:"LinkedIn"
    },
    {
      id: 2,
      name:"github",
      child: (
        <>
          <FaGithub size={26} />
        </>
      ),
      href: "https://github.com/Osamashaikh90/ ",
      style: "hover:text-gray-300",
      content:"GitHub"
    },
    {
      id: 3,
      name:"mail",
      child: (
        <>
          <HiOutlineMail size={26} />
        </>
      ),
      href: "mailto:shaikhosama499@gmail.com",
      style: "hover:text-red-400",
      content:"Mail"
    },
    {
      id: 4,
      name:"twitter",       
      child: (
        <>
          <FaXTwitter size={26} />
        </>
      ),
      href: "https://twitter.com/Osamash03705044",
      style: "hover:text-gray-400",
      content:"Twitter"
    },
  ];

    return (
        <div className=" lg:flex flex-col top-[40%] right-0 fixed">
      <ul >
          {links.map(({ id, child, href, style,name,content }) => (
            <>
           <ReactTooltip
                id={name}
                place="left"
                variant="light"
                content={content}
      />
              <li
                data-tooltip-id={name}
            key={id}
            className={`flex justify-between items-center w-15 h-10 p-3 rounded hover:rounded-md duration-300 bg-[#383a3d59] border border-[#1a1b1f] `}
          >
            <a
              href={href}
              className={`flex justify-between items-center w-full text-white ${style}`}
            //   download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
              </li>
              
          </>
        ))} 
      </ul>

    </div>
    )
};

export default SocialLinks

// hover:mr-[-10px]
//  mr-[-100px]