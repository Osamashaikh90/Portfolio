import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import {GoChevronUp} from "react-icons/go"
const GoToTop = () => {
     const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
     <>
        <div className="flex justify-center items-center relative ">
          {isVisible && (
            <div className="hover:animate-bounce  w-[2.5rem] h-[2.5rem]  z-[999] rounded-[50%] right-8 bottom-6 top-btn  text-[#555a62] bg-[#e6edf3] fixed flex justify-center items-center cursor-pointer shadow-md shadow-[#5f6e8a]" onClick={goToBtn}>
              <GoChevronUp className="top-btn--icon h-5 " />
            </div>
          )}
        </div>
      </>
  )
}

export default GoToTop

