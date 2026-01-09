import React, { useState, useEffect } from 'react';
import { SimplyFade } from 'simply-fades';
import Eye from '../assets/eye (1).png';
import Download from '../assets/downloade.png';
import LikeButton from './LikeButton';
import Dot from '../assets/full-stop.png';

export default function Pdfs() {
  const [PDFS, setPDFS] = useState([]);

  useEffect(() => {
    // This code will run after the component has mounted and the DOMContentLoaded event has occurred.
    new SimplyFade(); // Replace this with your specific initialization code

    // Fetch data from the PHP script when the component mounts
    fetch("http://localhost/blog/Homeblog.php", {
      method: "GET",
      headers: {
        "X-My-Request-Identifier": "Techuniverserequestfromhiruni"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPDFS(data); // Update the state with the fetched data
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='flex flex-col justify-center items-start px-[58px] mt-32'>
      <div className='flex flex-1 items-start flex-col'>
        <h2 simply-fade="up" className='text-[52px]'>Check Our Latest PDFs</h2>
        <p simply-fade="up" className='text-dimWhite space-x-1 text-[13px] opacity-90 mt-1 font-poppins max-w-xl'>
          Unleash the power of knowledge with our latest PDF offerings. Dive into the world of programming,
          AI, and web development, and elevate your tech skills to new heights.
        </p>
      </div>

      <div className='mt-16 flex flex-row justify-between items-center w-full z-[5]'>
        {PDFS.map((card, index) => (
          <div key={index} simply-fade="up" className='bg-black-gradient   rounded-tl-[20px] rounded-[20px] w-[360px]  h-[520px]'>
            <img src={card.img} alt={card.title} className='w-[360px]  cursor-pointer h-[270px] rounded-tl-[20px] rounded-tr-[20px]' />
            <div className='w-full flex justify-between items-center   -translate-y-[275px]'>
              <div className='w-[100%] pt-14 flex items-center  justify-end px-2 absolute'>
                <LikeButton likes={card.Likes} />
              </div>
            </div>
            <div className='w-full  flex flex-col  h-[250px] justify-between'>
              <div className='p-3'>
                <h2 className='font-extrabold text-[23px] cursor-pointer'>{card.title}</h2>
                <p className='opacity-60 font-serif text-[13px] mt-2'>{card.des}</p>
              </div>
              <div className='flex flex-row  justify-between items-center mb-2'>
                <div className=' flex justify-start items-center mx-3'>
                  <p className={`font-sans text-[12px] cursor-pointer opacity-80 `}>{card.date}</p>
                  <img src={Dot} alt='dot' />
                  <p className={`text-secondary font-sans text-[12px] cursor-pointer`}>
                    #{card.tags}
                  </p>
                </div>
                <div className=' flex justify-center items-center pe-5 pb-1'>
                  <div className=' h-6 w-6 cursor-pointer'>
                    <a href={`http://localhost:5174/${card.file}`} download={card.file} ><img src={Download} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='blue__gradient absolute w-[400px] h-[300px] z-[2] translate-x-[100%]' />
    </div>
  );
}
