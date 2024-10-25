"use client";
import { useEffect, useRef } from "react";

// used several sources to understand this and program it as such using useEffect, useRef
// https://stackoverflow.com/questions/75344975/is-it-possible-to-use-tailwind-css-to-have-a-hover-effect-follow-a-mouse
// https://ibelick.com/blog/create-modern-spotlight-effect-with-react-css
// https://www.youtube.com/watch?v=r1nWWrsVqmI&ab_channel=LiveBlogger

export default function MouseSpotlightItem() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSpotlightPosition = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", updateSpotlightPosition);

    return () => {
      window.removeEventListener("mousemove", updateSpotlightPosition);
    };
  }, []);

  return <div ref={spotlightRef} className="mouse-spotlight z-[-1]" />;
}
