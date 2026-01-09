import React from 'react'
import Html from '../assets/html-5.png';
import Js from '../assets/js.png';
import Java from '../assets/java.png';
import Reacts from '../assets/science.png';
import Tail from '../assets/Tailwind-CSS1-900x0.png';
import Boots from '../assets/bootstrap.png';
import Ruby from '../assets/ruby (1).png';
import Python from '../assets/python.png';
import Swift from '../assets/swift.png';
import Django from '../assets/django.png';
import Express from '../assets/flutter.png';
import C from '../assets/c.png';
import Mongo from '../assets/mongodb.png';
import Net from '../assets/microsoft-dotnet.png';
import Vue from '../assets/vuejs.png';
import TypeS from '../assets/typescript.png';
import Searche from '../assets/magnifying-glass (1).png';
import Delete from '../assets/delete.png';

export default function TechSearch({ color, setColor }) {
  return (
    <div className=' h-[300px] w-[100%] flex flex-col  p-[52px]'>
      <div className='h-[300px]  z-[2] '>
        <img src={Html} className='w-20 h-20  z-[3]  translate-x-3 translate-y-3  absolute' />
        <img src={Js} className=' w-16 h-16  z-[3]  translate-x-72 translate-y-5  absolute' />
        <img src={Java} className='  w-36 h-36  z-[3]  translate-x-[400px] translate-y-10  absolute' />
        <img src={Reacts} className=' w-20 h-20 z-[3]  translate-x-36 translate-y-16 absolute' />
        <img src={Tail} className='  w-24 h-20  z-[3]  translate-x-3 translate-y-44 absolute' />
        <img src={Boots} className=' w-16 h-16 z-[3]  translate-x-[640px] translate-y-8 absolute' />
        <img src={Ruby} className=' w-20 h-20  z-[3] translate-x-[580px] translate-y-32 absolute' />
        <img src={Python} className=' w-20 h-20   z-[3] translate-x-[1130px] translate-y-8  absolute' />
        <img src={Django} className=' w-16 h-16  z-[3] translate-x-[770px] translate-y-24 absolute' />
        <img src={Swift} className='  w-16 h-16  z-[3] translate-x-60 translate-y-[190px] absolute' />
        <img src={Express} className=' w-12 h-12  z-[3] translate-x-[690px] translate-y-52 absolute' />
        <img src={Mongo} className='  w-20 h-20 z-[3]  translate-x-[450px] translate-y-52 absolute' />
        <img src={C} className='  w-20 h-20  z-[3]  translate-x-[1100px] translate-y-52  absolute' />
        <img src={Net} className=' w-20 h-20  z-[3] translate-x-[950px] translate-y-32 absolute' />
        <img src={Vue} className='  w-20 h-20  z-[3] translate-x-[890px] translate-y-9 absolute' />
        <img src={TypeS} className=' w-20 h-20 z-[3] translate-x-[830px] translate-y-52 absolute' />
      </div>
      <div className='  h-[300px] w-[92%]  z-[5]  searchfg rounded-lg absolute' />

      <div className=' h-[300px] w-[92%] z-[7] rounded-lg absolute flex justify-center items-center flex-col p-8'>
        <h2 className=' font-bold text-[58px]'>Tech Universe PDFs Center</h2>
        <p className=' text-center font-poppins text-white opacity-70 text-[14px]'>Welcome to Tech Universe, your one-stop destination for free PDF resources on various programming languages. We highly respect the original authors of these materials and, in line with our commitment, we do not alter or remove any author credentials from the PDFs. If you have any concerns or complaints about the PDFs we offer, please let us know, and we will promptly remove them from our collection. It's important to note that all credentials and ownership rights belong to their respective original authors. Our main purpose is to provide a platform where you can freely access and explore a wealth of programming knowledge.</p><br />
        <div className='  flex flex-row bg-[#D9D9D9]  p-1 w-[50%] rounded  items-center'>
          <img src={Searche} alt='search' />
          <input className=' bg-[#D9D9D9] outline-none text-black p-1 w-[100%]' id='sea' placeholder='Search...' onChange={(e) => {
            
            setColor(e.target.value);
            let de = document.getElementById("delet");
            if (e.target.value == '') {
              de.style.display = "none";
              setColor("All");
            } else {
              de.style.display = "block";
            }
          }} />
          <img src={Delete} alt='Delete' className={` w-[17px] h-[17px] cursor-pointer opacity-90 hidden`} id='delet' onClick={() => {
            let se = document.getElementById("sea");
            se.value = '';
            setColor("All");
            let de = document.getElementById("delet");
            de.style.display = "none";
          }} />
        </div>
      </div>
    </div>
  )
}
