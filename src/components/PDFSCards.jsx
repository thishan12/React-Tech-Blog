import React, { useState, useEffect } from 'react';
import { SimplyFade } from 'simply-fades';
import Eye from '../assets/eye (1).png';
import Download from '../assets/downloade.png';
import LikeButton from './LikeButton';
import Dot from '../assets/full-stop.png';
import Box from '../assets/empty-box.png'


export default function PDFSCards({ color }) {
  const [all, setAll] = useState(3);
  const [react, setReact] = useState(3);
  const [vue, setVue] = useState(3);
  const [ruby, setRuby] = useState(3);
  const [node, setNode] = useState(3);
  const [cyber, setCyber] = useState(3);
  const [Blog, setBlogs] = useState([]);

  const fetchData = (selectedColor, count) => {

    fetch(`http://localhost/blog/PDFsCenter.php?Menu=${selectedColor}&Count=${count}`, {
      method: 'GET',
      headers: {
        "X-My-Request-Identifier": "Techuniverserequestfromhiruni"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setBlogs([]);
        } else {
          setBlogs(data);
        }

      })
      .catch((error) => console.log(error));
  };

  // Call fetchData when the page loads and when color changes
  useEffect(() => {
    fetchData(color, getCountForMenu(color));
  }, [color]);

  // Function to handle button click and trigger the data fetch
  const handleButtonClick = () => {
    const updatedCount = getCountForMenu(color) + 6;
    setCountForMenu(color, updatedCount);
    fetchData(color, updatedCount);
  };

  // Helper function to get the appropriate count based on the selected menu
  const getCountForMenu = (menu) => {
    switch (menu) {
      case 'All':
        return all;
      case 'ReactJS':
        return react;
      case 'VueJS':
        return vue;
      case 'Ruby':
        return ruby;
      case 'NodeJS':
        return node;
      case 'Cyber Security':
        return cyber;
      default:
        return 3;
    }
  };

  // Helper function to set the appropriate count based on the selected menu
  const setCountForMenu = (menu, count) => {
    switch (menu) {
      case 'All':
        setAll(count);
        break;
      case 'ReactJS':
        setReact(count);
        break;
      case 'VueJS':
        setVue(count);
        break;
      case 'Ruby':
        setRuby(count);
        break;
      case 'NodeJS':
        setNode(count);
        break;
      case 'Cyber Security':
        setCyber(count);
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex flex-col justify-center items-start px-[58px] '>
      <div className={`mt-4 grid  sm:grid-cols-1 md:grid-cols-3 gap-16 z-[5]  ${Blog.length === 0 ? 'hidden' : 'block'}`}>
        {Blog.map((card, index) => (
          <TechCard key={index} card={card} />
        ))}
      </div>
      <div className={`mt-4 w-full flex justify-center items-center flex-col mb-8 z-[5] ${Blog.length === 0 ? 'block' : 'hidden'}`}>
        <img src={Box} alt='O-results-tech-universe' className=' w-[350px]' />
        <p className=' mt-3 text-[22px] font-semibold'>Cannot FInd Any Result Baby !</p>
      </div>
      <div className={`w-full justify-center items-center flex mt-10 ${Blog.length === 0 ? 'hidden' : 'block'}`}>
        <button onClick={handleButtonClick} className='p-3 text-gradient text-black w-[190px] rounded-[25px] hover:-translate-y-3 duration-500'>Load More</button>
      </div>
      <div className={`blue__gradient absolute  ${Blog.length === 0 ? ' w-[200px] h-[100px]  translate-x-[250%]' : ' w-[400px] h-[300px]  translate-x-[100%] '} z-[2]`} />
    </div>
  );
}

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

function TechCard({ card }) {
  const maxle = 7;
  const maxLength = 30; // Set the maximum word count you want to display


  return (
    <div className='bg-black-gradient  duration-500  rounded-tl-[20px] rounded-[20px] w-[360px]'>
      <img src={card.img} alt={card.title} className='w-[360px]  cursor-pointer h-[270px] rounded-tl-[20px] rounded-tr-[20px]' />
      <div className='w-full flex justify-between items-center  -translate-y-[250px]'>
        <div className='w-[100%] flex justify-end items-center pt-2 pe-2 absolute'>
          <LikeButton likes={card.Likes} />
        </div>
      </div>
      <div className='w-full  flex flex-col   h-[250px] justify-between'>
        <div className='px-3 pt-3 pe-3'>
          <h2 className='font-extrabold text-[23px] cursor-pointer'>{truncateTitle(card.title, maxle)}</h2>
          <span className=''><p className='opacity-60 font-serif text-[13px] mt-2 mb-1'>{truncateTitle(card.des, maxLength)}</p>
            <p className={`fe font-sans text-[12px] cursor-pointer`}>
              #{card.tags}
            </p></span>
        </div>
        <div className='flex flex-row  justify-between items-center px-3 pb-2 mt-3'>
          <div className='flex flex-row gap-1 mt-3 items-center'>
            <p className={`font-sans text-[12px] cursor-pointer`}>{card.Views} Views</p>
            <img src={Dot} alt='dot' />
            <p className={`font-sans text-[12px] cursor-pointer opacity-80 `}>{card.date}</p>
          </div>
          <div className=' flex justify-center items-center pe-4'>
            <div className=' h-6 w-6 cursor-pointer'>
              <img href={`http://localhost:5173/${card.file}`} download={card.file} src={Download} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}