"use client"
import React from 'react'

const Loading: React.FC = () => {


  return (
    <main className='flex items-center justify-center '>
      <div className=''>
        {/* <div className="pc-spinner-box"> */}
          <div className="pc-circle-border">
            <div className="pc-circle-core"></div>
          </div>
        {/* </div> */}
      </div>
    </main>
  );

}

export default Loading
