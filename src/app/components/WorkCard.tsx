import React from 'react'
import { workData, WorkDataTypes } from '../utils/work'
import {PiCalendarBold} from "react-icons/pi"
interface WorkCardProps {
  work:WorkDataTypes ;
}
const EducationCard:React.FC<WorkCardProps> = ({work}) => {
  return (
    <>
          <div className='grid-item ml-1'>
      <span className="round inline-block absolute left-[47.8%] mobile:left-[48.7%] w-3 h-3 bg-[#ff5f9e] z-10  bg-opacity-100 rounded-[50%]"></span>
              <h3 className='font-bold text-base font-Croissant '>{work.position}</h3>
              <div className='flex flex-col gap-1'>
              <span className='text-[#c4cddc] text-sm'> {work.company}</span>
              <span className="text-[#818791]">{work.description}</span>
                  <span className='text-[#7d8590] text-sm flex gap-[2px] items-center'><PiCalendarBold/>{work.date}</span>
        </div>
      </div>
      </>
  )
}

export default EducationCard