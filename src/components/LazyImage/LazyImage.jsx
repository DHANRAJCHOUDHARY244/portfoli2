import React, { useRef, useState, useEffect } from 'react';
import Loader from './spinner.mov.gif'

const LazyImage = ({ src, alt ,className,style}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoading(false);
          observer.unobserve(imgRef.current);
        }
      });
    });

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <>
      {isLoading && (
        <img
        src={Loader}
        alt='loader'
        height={'40px'}
        width={'40px'}
      />
      )}
      <img
        ref={imgRef}
        className={className}
        src={isLoading ? '' : src}
        alt={alt}
        style={style}
      />
    </>
  );
};

export default LazyImage;
