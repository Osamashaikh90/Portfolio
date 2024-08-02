import { useEffect, useRef, useState } from "react";
import {
  CHARACTERS,
  CYCLE_PER_CHARACTER,
  DELAY_TIME,
  SHUFFLE_TIME,
} from "../utils/characters";

interface EncryptTextEffectV2Props {
  children: string;
}

const TextEffect: React.FC<EncryptTextEffectV2Props> = ({ children }) => {
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const wordIndexRef = useRef<number>(0);
    const [text, setText] = useState<string>("");
  
    useEffect(() => {
      const words = children.split(", ");
  
      const scrambleText = () => {
        let scramblePosition = 0;
  
        intervalRef.current = setInterval(() => {
          const scrambled = words[wordIndexRef.current]
            .split("")
            .map((char, index) => {
              if (scramblePosition / CYCLE_PER_CHARACTER > index) {
                return char;
              }
              const randomCharIndex = Math.floor(
                Math.random() * CHARACTERS.length,
              );
              const randomChar = CHARACTERS[randomCharIndex];
  
              return randomChar;
            })
            .join("");
  
          setText(scrambled);
          scramblePosition++;
  
          if (scramblePosition >= words[wordIndexRef.current].length * CYCLE_PER_CHARACTER) {
            clearInterval(intervalRef.current!);
            setText(words[wordIndexRef.current]);
  
            timeoutRef.current = setTimeout(() => {
              wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
              scrambleText();
            }, DELAY_TIME);
          }
        }, SHUFFLE_TIME);
      };
  
      scrambleText();
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [children]);

  return (
    <span aria-live="polite" aria-label={children} className="text-[#9cf5fd]">
      {text}
    </span>
  );
};

export default TextEffect;
