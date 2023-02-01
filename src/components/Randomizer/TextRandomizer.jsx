import { useEffect, useRef, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TextRandomizer = ({ text }) => {
  const [innerText, setInnerText] = useState(text);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setInnerText((innerText) =>
        innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration.current >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span onMouseOver={handleMouseOver} data-value={text}>
      {innerText}
    </span>
  );
};

export default TextRandomizer;
