import { useEffect, useState, useRef } from "react";
import codeData from "../data/MessageData.json";

const CodeComplete = () => {
  const [displayText, setDisplayText] = useState("");
  const [step, setStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef(null);

  // efecto máquina de escribir
  useEffect(() => {
    if (step < codeData.length) {
      if (charIndex < codeData[step].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + codeData[step][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); // velocidad de escritura
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setStep(step + 1);
          setDisplayText("");
          setCharIndex(0);
        }, 1000); // pausa entre palabras
        return () => clearTimeout(timeout);
      }
    } else {
      // reinicia el ciclo
      const timeout = setTimeout(() => {
        setStep(0);
        setDisplayText(" ");
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, step]);




  return (
    <div
      ref={containerRef}
      className="flex items-end  text-green-700 dark:text-green-500 font-semibold md:text-3xl text-xl space-x-2"
    >
      <div>{displayText}</div>     
    </div>
  );
};

export default CodeComplete;