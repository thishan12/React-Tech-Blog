import React from 'react';

import { SimplyFade } from 'simply-fades'
import { useEffect } from 'react';
import LikeButton from './LikeButton';
import { useState } from 'react';
import Dot from '../assets/full-stop.png';

function truncateTitle(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const words = text.split(' ');
  const truncatedText = words.slice(0, maxLength).join(' ');
  return `${truncatedText}...`;
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const words = text.split(' ');
  const truncatedText = words.slice(0, maxLength).join(' ');
  return `${truncatedText}...`;
}

function BlogCard({ card }) {
  const maxle = 5;
  const maxLength = 40; // Set the maximum word count you want to display

  useEffect(() => {
    // This code will run after the component has mounted and the DOMContentLoaded event has occurred.
    new SimplyFade(); // Replace this with your specific initialization code
  }, []);

  return (

    <div className='bg-black-gradient-2 rounded-tl-[20px] rounded-[20px] w-[360px]' simply-fade="up">
      <img src={card.img} alt={card.title} className='w-[360px] cursor-pointer h-[220px] rounded-tl-[20px] rounded-tr-[20px]' />
      <div className='w-full flex justify-between items-center  absolute -translate-y-[270px]'>
        <div className='w-[100%] pt-14 flex justify-end items-center  pe-2'>
          <LikeButton likes={card.Likes} />
        </div>
      </div>
      <div className='w-full px-3 pt-3 pl-3 pb-2'>
        <h2 className='font-extrabold text-[23px] cursor-pointer'>{truncateTitle(card.title, maxle)}</h2>
        <p className='font-serif text-[13px] mt-1 opacity-60 '>
          {truncateText(card.des, maxLength)}
        </p>
        <div className='flex flex-row gap-1 mt-4 items-center'>
          <p className={`font-sans text-[12px] cursor-pointer opacity-80 `}>{card.date}</p>
          <img src={Dot} alt='dot' />
          
            <p className={`fe font-sans text-[12px] cursor-pointer`}>
              #{card.tags}
            </p>
         
        </div>
      </div>
    </div>

  );
}

export default function Blognews() {
  const [Blogm, setBlogs] = useState([]);

  useEffect(() => {
    // This code will run after the component has mounted and the DOMContentLoaded event has occurred.
    new SimplyFade(); // Replace this with your specific initialization code

    fetch('http://localhost/blog/HomePdfs.php', {
      method: 'GET',
      headers: {
        "X-My-Request-Identifier": "Techuniverserequestfromhiruni"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.log(error));

  }, []);

  return (

    <div className='flex flex-col justify-center items-start px-[58px] mt-24'>
      <div className='flex flex-1 items-start flex-col' >
        <h2 className='text-[52px]' simply-fade="up" >Check Our Latest Blog Posts</h2>
        <p simply-fade="up" className='text-dimWhite space-x-1 text-[13px] opacity-90 mt-1 font-poppins max-w-xl'>
          Explore our dynamic blog, covering tech, science, and political insights. Stay informed, engaged, and up-to-date with our thought-provoking articles.
        </p>
      </div>
      <div className='mt-16 flex flex-row justify-between items-center w-full z-[5]'>
        {
          Blogm.map((card,index) => (
            <BlogCard key={index} card={card} />
          ))
        }
      </div>
      <div className='blue__gradient absolute w-[300px] h-[200px] z-[2] translate-x-[100%]' />
    </div>
  );
}
