import { useEffect, useRef } from "react";

const FadeInOnIntersect = ({ children, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div ref={elementRef} className={`hidden ${className}`}>
      {children}
    </div>
  );
};

export default FadeInOnIntersect;
