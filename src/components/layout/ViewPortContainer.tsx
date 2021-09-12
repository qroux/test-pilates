import React, { useEffect, useRef, useState } from "react";

const ViewportContainer = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver((entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting && target) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(target);
        console.log("Observer removed");
      }
    }, options);

    if (target) observer.observe(target);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "1s",
        opacity: isVisible ? 1 : 0,
        transitionTimingFunction: "ease-out",
        transitionDelay: "1s",
      }}
    >
      {children}
    </div>
  );
};

export default ViewportContainer;
