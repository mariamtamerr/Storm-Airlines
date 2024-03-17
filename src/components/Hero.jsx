'use client'

import React, { useEffect, useState } from 'react'

const Hero = () => {

    const images = [
        'https://697c61.p3cdn1.secureserver.net/wp-content/uploads/2021/07/wts-corporate.jpg?time=1710454083',
        'https://697c61.p3cdn1.secureserver.net/wp-content/uploads/2021/06/qtq80-7wEEjy.jpeg?time=1710454083',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <section className="w-full z-0 relative md:h-screen">
        <div className="w-full  h-full bg-cover bg-center py-32" style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 0.7, // Set opacity value as needed
        }}>
          <div className="container mt-28 mx-auto text-center text-white">
            <h1 className="text-5xl font-extrabold md:mb-16 mb-10">Your journey starts here</h1>
            <p className="text-xl  font-bold mb-12">Discover and book your travel destinations with experienced agents at Storm Airlines</p>
            <a href="#" className="bg-blue-500  text-white py-4 px-12 rounded-full hover:bg-blue-600 hover:cursor-pointer">Learn More</a>
          </div>
        </div>
      </section>
  )
}

export default Hero