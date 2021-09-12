import React, { useEffect, useRef, useState } from "react";

const ViewportContainer = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver((entries: any) => {
      const [entry] = entries;
      if (entry.isIntersecting && target) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(target);
      }
    }, options);

    if (target) observer.observe(target);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transition: "0.5s",
        opacity: isVisible ? 1 : 0,
        transitionTimingFunction: "ease-out",
        transitionDelay: "0.5s",
      }}
    >
      {children}
    </div>
  );
};

export default ViewportContainer;
