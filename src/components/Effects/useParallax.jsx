import { useEffect } from "react";

const useParallax = (elementRef, speed) => {
  useEffect(() => {
    const handleScroll = () => {
      const { current: element } = elementRef;
      if (element) {
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, speed]);
};

export default useParallax;
