"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md" 
import styles from "@/styles/ScrollToTop.module.css";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisiblity = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll',toggleVisiblity)
    return ()=> window.removeEventListener('scroll',toggleVisiblity)
  }, []);
  const scrollToTop = () => {
    isVisible &&
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <button className={`${isVisible ? styles.buttonVisible : styles.button}`} onClick={scrollToTop}>
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ScrollToTop;
