"use client"
import React, {useState} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaRegImage } from "react-icons/fa6";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { Gi3dHammer } from "react-icons/gi";
import { GiStickGrenade } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

interface GenerateProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const Navbar : React.FC<GenerateProps> = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState('home');
 
  const setActiveMenu = (text :string) => {
    setActive(text)
  }

  return (
    <div className='flex flex-row justify-between p-4 px-6 items-center'>
        <div className={`flex flex-row p-4 items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}>
            <h1 className='font-bold text-2xl'>K</h1>
            <div className='bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full p-3 ml-4 cursor-pointer'></div>
            <div className="text-sm">Benevolent</div>
            <div><FaAngleDown size={'10px'} /></div>
        </div>
        <div className='flex flex-row items-center p-1 gap-7 bg-gray-200 rounded-xl p-2'>
            <div className={active == "home" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""} onClick={() =>setActiveMenu ('home')}><GoHomeFill /></div>
            <div className={active == "img" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""}  onClick={() =>setActiveMenu ('img')}><FaRegImage /></div>
            <div className={active =="camera" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""}  onClick={() =>setActiveMenu ('camera')}><BsFillCameraVideoFill /></div>
            <div  className={active =="hammer" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""} onClick={() =>setActiveMenu ('hammer')}><Gi3dHammer /></div>
            <div className={active =="stick" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""}  onClick={() =>setActiveMenu ('stick')}><GiStickGrenade /></div>
            <div className={active =="folder" ? 'bg-white shadow-md rounded-xl p-2 px-3 cursor-pointer' : ""} onClick={() =>setActiveMenu ('folder')}><FaFolder/> </div>
        </div>
        <div className='flex flex-row p-4 items-center gap-3'>
            <div className="bg-gray-200 rounded-xl p-2 flex flex-row items-center gap-2 cursor-pointer"><RiGalleryFill /><span className='text-sm'>Gallery</span> </div>
            <div className="bg-gray-200 rounded-xl p-2 flex flex-row items-center gap-2 cursor-pointer cursor-pointer"><BiSupport /> <span className='text-sm'>Support</span> </div>
            <div className="bg-gray-200 rounded-xl p-2"><FaBell /></div>
            <div className="bg-gray-200 rounded-xl p-2 cursor-pointer" onClick={toggleDarkMode}><MdLightMode /></div>
            <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-full p-3" ></div>
        </div>
    </div>
  )
}

export default Navbar