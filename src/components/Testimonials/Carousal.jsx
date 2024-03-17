'use client';

import React, { useEffect } from 'react';
import Testimonials from './Testimonials';

const Carousal = () => {
  useEffect(() => {
    const carouselBody = document.querySelector('.hs-carousel-body');
    const slides = document.querySelectorAll('.hs-carousel-slide');
    const prevButton = document.querySelector('.hs-carousel-prev');
    const nextButton = document.querySelector('.hs-carousel-next');
    const pagination = document.querySelectorAll('.hs-carousel-pagination span');
    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });

      pagination.forEach((dot, i) => {
        dot.classList.toggle('hs-carousel-active', i === index);
      });
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
      prevButton.removeEventListener('click', prevSlide);
      nextButton.removeEventListener('click', nextSlide);
    };
  }, []);

  return (
    <div>

   
      <h2 className="text-2xl md:text-5xl -mt-44 md:-mt-13 text-center text-blue-500 mb-20 font-bold  md:leading-tight dark:text-white">What our clients say about us</h2> 
    
    <div data-hs-carousel='{"loadingClasses": "opacity-"}' className="relative w-fit bg-slate-50 md:p-10 p-3 rounded-2xl md:mb-44 md-20">
      <div className="hs-carousel relative overflow-hidden w-screen min-h-[350px] p-20 rounded-lg">
        <div className="hs-carousel-body absolute top-0 left-0 flex transition-transform duration-1000  opacity-">
          <div className="hs-carousel-slide w-screen ">
            <div className="flex justify-center h-full bg-slate-50 rounded-2xl md:p-6 p-10">
              <span className="self-center text-4xl transition duration-1000">
                <Testimonials/>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide w-screen">
            <div className="flex justify-center h-full bg-slate-50 rounded-2xl md:p-6 p-10">
            <span className="self-center text-4xl transition duration-1000">
                <Testimonials/>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide w-screen">
            <div className="flex justify-center h-full bg-slate-50 md:p-6 p-10">
            <span className="self-center text-4xl transition duration-1000">
                <Testimonials/>
              </span>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span className="text-2xl" aria-hidden="true">
          &lt;
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          &gt;
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div>
    </div>
     </div>
  );
};

export default Carousal;
