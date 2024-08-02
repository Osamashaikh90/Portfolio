import { useRef,useEffect } from "react";
import useTabSwitch from "../hooks/useTabSwitch";
const DynamicTitleComponent = () => {
    const originalTitleRef = useRef<string>(document.title);

  const onTabBlur = () => {
    document.title = "🥺 Don't stay away too long! Osama is waiting.";
  };
  const onTabFocus = () => {
    document.title = originalTitleRef.current;
  };

  useTabSwitch(onTabFocus, onTabBlur);

  useEffect(() => {
    const originalTitle = originalTitleRef.current;

    return () => {
      document.title = originalTitle;
    };
  }, []);
  return null;
}

export default DynamicTitleComponent