import React, { useEffect, useRef, useState } from 'react'

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);
  const [hideInFooter, setHideInFooter] = useState(false);
  const footerRef = useRef(null);

  // Detect scrolling to show/hide the button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Detect if footer is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideInFooter(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div ref={footerRef} id="footer-anchor" />
      {isVisible && !hideInFooter && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  )
}

export default ScrollUp
