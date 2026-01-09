import React from 'react'
import Nano from '../assets/technology (2).png'
import Downloads from '../assets/download (3).png'
import PDFs from '../assets/pdf-file-format.png'


export default function About() {
  return (
    <div className='flex justify-between items-center  px-[58px]  pt-[58px]' >
      <div className='z-[5]'>
        <div className='pt-6'    simply-fade="right" >
          <div className=' flex items-center   p-4 bg-black-gradient-2 rounded-[24px]'>
            <div className='about-bg rounded-full p-3 w-24 h-24 flex justify-center items-center'>
              <img src={Nano} alt='' className=' w-20 h-20' />
            </div>
            <div className=' px-5'>
              <h3 className=' text-white text-[30px]'>Technologies</h3>
              <p className=' text-dimWhite space-x-1 text-[13px] opacity-70'>Explore a diverse range of technologies through our PDF collection.<br></br> From PHP, HTML, and CSS for web development to React and Vue.js for dynamic interfaces,<br></br>  and even Ruby's elegance, we've got you covered. Dive into the world of programming with C#,<br></br>and access PDF resources that make learning and mastering these technologies a breeze</p>
            </div>
          </div>
        </div>

        <div className='pt-6'  simply-fade="right" >
          <div className='p-4 bg-black-gradient-2 rounded-[24px] w-[500px]'>
            <div className=' flex justify-center items-center'>
              <div className='about-bg rounded-full w-24 h-24  flex justify-center items-center p-3'>
                <img src={Downloads} alt='' className=' w-20 h-20' />
              </div>
            </div>
            <div className='px-5 flex flex-col justify-center items-center'>
              <h3 className=' text-white text-[30px]'>Downloads</h3>
              <p className=' text-dimWhite space-x-1 text-[13px] text-center  opacity-70'>Our website boasts an impressive 15,000 monthly downloads, offering a diverse range of PDFs covering essential technologies. From web development tools like PHP, HTML, and CSS to dynamic frameworks like React and Vue.js, we cater to a global audience of tech enthusiasts and learners. Join us to access valuable resources and stay updated on the latest tech trends</p>
            </div>
          </div>
        </div>

        <div className='pt-6'  simply-fade="right" >
          <div className=' flex items-center   p-4 bg-black-gradient-2 rounded-[24px]'>
            <div className='about-bg rounded-full p-3 w-24 h-24 flex justify-center items-center'>
              <img src={PDFs} alt='' className=' w-20 h-20' />
            </div>
            <div className=' px-5'>
              <h3 className=' text-white text-[30px]'>PDFs</h3>
              <p className=' text-dimWhite space-x-1 text-[13px]  opacity-70'>Discover over 1,000 PDFs in our collection, spanning various tech topics.<br></br> From web development to programming languages and emerging technologies,<br></br> our library is a valuable resource for knowledge seekers. Explore the possibilities <br></br> and enhance your tech skills with our extensive PDF collection.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=''  simply-fade="left" >
        <div className=' flex flex-col flex-1 items-center'>
          <h2 className='text-[52px] text-center'>Explore Our Story </h2>
          <h2 className='text-[52px]'>and Mission</h2>
        </div>
      </div>

      <div className=' z-[0] w-[400px] h-[400px] translate-y-20 blue__gradient absolute' />
    </div>
  )
}
