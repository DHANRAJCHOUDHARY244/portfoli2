import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useEffect } from 'react';

const InfiniteText = ({text}) => {
    const textRef = useRef(null);
  
    useGSAP(() => {
      const timeline = gsap.timeline({ repeat: -1 }); 
      text.split('').forEach((char, index) => {
        timeline.fromTo(
          `#Type${index}`,
          { opacity: 0,},
          { opacity: 1, scale: 1, duration: 0.3, }
        );
      });
  
      return () => timeline.kill(); 
    }, [text]);
  
    return (
      <div ref={textRef}>
        {text.split('').map((char, index) => (
          <span key={index} id={`Type${index}`}>{char}</span>
        ))}
      </div>
    );
}


export default InfiniteText
