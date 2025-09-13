"use client"
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Generate from "./component/Generate";
import Footer from "./component/Footer";
export default function Home() {
   const [darkMode, setDarkMode] = useState(false);
     const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  }
  return (
   <div className={`${darkMode ? 'bg-black' : 'bg-white'}`}>
    <Navbar darkMode={darkMode} toggleDarkMode ={toggleDarkMode}/>
    <Slider darkMode={darkMode} />
    <Generate darkMode={darkMode} />
    <Footer />
   </div>

  );
}
