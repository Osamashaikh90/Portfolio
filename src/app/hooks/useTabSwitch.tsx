import React,{useEffect} from 'react'
type EventHandler = () => void;
const useTabSwitch = (onTabFocus: EventHandler, onTabBlur: EventHandler): void => {
    useEffect(() => {
        window.addEventListener("focus", onTabFocus);
        window.addEventListener("blur", onTabBlur);
    
        return () => {
          window.removeEventListener("focus", onTabFocus);
          window.removeEventListener("blur", onTabBlur);
        };
      }, [onTabFocus, onTabBlur]);
}

export default useTabSwitch