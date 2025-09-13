"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import slider1 from '@/assets/slider1.jpg'
import slider2 from '@/assets/slider2.jpg'

interface GenerateProps {
  darkMode: boolean;
}
const Slider : React.FC<GenerateProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample data - replace with your actual images and content
  const slides = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      image: slider1.src,
      label: "NEW AI MODEL"
    },
    {
      id: 2,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      image: slider2.src,
      label: "OPEN SOURCE"
    },
    {
      id: 3,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      image: slider1.src,
      label: "NEW AI MODEL"
    },
    {
      id: 4,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      image: slider2.src,
      label: "OPEN SOURCE"
    },
    {
      id: 5,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      image: slider1.src,
      label: "NEW AI MODEL"
    },
    {
      id: 6,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      image: slider2.src,
      label: "OPEN SOURCE"
    },
    {
      id: 7,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      image: slider1.src,
      label: "NEW AI MODEL"
    },
    {
      id: 8,
      title: "Open Source",
      subtitle: "FLUX.1 Krea",
      description: "We're making the weights for our FLUX.1 Krea model open source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      image: slider2.src,
      label: "OPEN SOURCE"
    },
    {
      id: 9,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      image: slider1.src,
      label: "NEW AI MODEL"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 pl-10">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 66.67}%)`,
          }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="relative flex-shrink-0 h-96 rounded-2xl overflow-hidden mr-6"
              style={{ width: 'calc(66.67% - 12px)' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image 
                  src={slide.image} 
                 alt=''
                 fill

                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                {/* Top Label */}
                <div className="flex justify-start">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                    {slide.label}
                  </span>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="text-7xl font-bold text-white mb-2 leading-tight text-center mt-20">
                    {slide.title}
                  </h2>
                    <h3 className="text-xl font-semibold text-white/90 mb-1 mt-7">
                    {slide.subtitle}
                  </h3>
                  <div className='flex flex-row justify-between'>
                    <div>
                
                  <p className="text-white/80 mb-6 leading-relaxed max-w-sm text-sm">
                    {slide.description}
                  </p>
                  </div>
                  <div className='mt-7 relative right-3'>
                   <button className="bg-white text-black px-6 py-3 rounded-3xl font-medium hover:bg-gray-100 transition-colors duration-200 text-sm">
                    {slide.buttonText}
                  </button>
                  </div>
                  </div>
                </div>
                
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls Container */}
      <div className="flex justify-between items-center mt-2 pl-[40%] pr-10">
        {/* Dot Indicators - Left/Center */}
        <div className="flex space-x-3 ml-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex 
                  ? 'bg-gray-900' 
                  : 'bg-gray-300 hover:bg-gray-400'
              } ${darkMode ? 'bg-gray-600' : ''}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Right */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;