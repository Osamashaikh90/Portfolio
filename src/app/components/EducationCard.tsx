import React from 'react'
import { educationData, EducationDataTypes } from '../utils/education'
import {PiCalendarBold} from "react-icons/pi"
interface EducationCardProps {
  education:EducationDataTypes ;
}
const EducationCard:React.FC<EducationCardProps> = ({education}) => {
  return (
    <>
          <div className='grid-item ml-1'>
      <span className="round inline-block absolute left-[47.8%] mobile:left-[48.7%] w-3 h-3 bg-[#ff5f9e] z-10  bg-opacity-100 rounded-[50%]"></span>
              <h3 className='font-bold text-base font-Croissant '>{education.course_name}</h3>
              <div className='flex flex-col gap-1'>
              <span className='text-[#a2a9b4] text-sm'> {education.university_name}</span>
              {/* <span>{education.address }</span> */}
                  <span className='text-[#7d8590] text-sm flex gap-[2px] items-center'><PiCalendarBold/>{education.date}</span>
        </div>
      </div>
      
      {/* <div className="line">
        
        {/* <span className="line block w-[1px] h-full bg-[#9cf5fd] transform translate-x-[6px] -translate-y-[7px]"></span> */}
      {/* </div> */}
      </>
  )
}

export default EducationCard