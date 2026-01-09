import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Html from '../assets/Untitled design (3).png';
import Arr from '../assets/right-arrow.png';


export default function Technologies() {
  return (
    <div className='flex  px-[58px]   mt-44 mb-44'>
      <div className=' w-full flex flex-row justify-center items-center'>
        <div className=' w-[50%] z-[5] ' simply-fade="right" >
          <img src={Html} className='' />
        </div>
        <div className=' w-[50%] px-16 flex-col items-center  z-[5] ' simply-fade="left" >
          <div className=' flex flex-col  flex-1 items-center'>
            <div>
              <h2 className='text-[42px] '>Empowering Programmers and Tech Enthusiasts with Free Resources.</h2>
            </div>
            <div className='  mt-5'>
              <p className='  mb-2  font-poppins text-[19px]'>Your ultimate destination for free programming language PDFs and staying abreast of the latest technology news.</p>
            </div>
            <div className=' flex flex-row items-center  w-[100%] mt-8'>
              <div class="blue-btn flex items-center justify-center cursor-pointer">
                <a href="" className=' font-bold'>
                  Learn More
                </a>
                <img src={Arr} className='mx-1 w-3 arrow'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='blue__gradient absolute w-[400px] h-[300px] z-[2] translate-x-10' />
    </div>
  );
}
