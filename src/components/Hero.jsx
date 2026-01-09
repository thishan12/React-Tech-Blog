import React from 'react'
import Shuttle from '../assets/shuttle.png'
import Heroimg from '../assets/6436c3ede5af8.png'
import { motion } from 'framer-motion'
import Backimg from '../assets/5581937.png'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {

  return (
    <div className={`bg-img h-[100vh]`}>
      <div className={`flex flex-1 justify-center items-center z-[300] `}>
        <div className=' flex flexs-1 justify-center items-center flex-row  z-[5]'>
          <img src={`https://res.cloudinary.com/ds5sq9y4h/image/upload/v1723705309/kbc6wztmt9hqszoqqlva.png`} alt='Tech-Universe-Hero-img' className='w-[660px] h-[630px]' loading='lazy' />
        </div>
        <div className='absolute w-[100%] h-[100vh]   z-[8] justify-center items-center flex flex-col ' simply-fade="up">
          <h1 className=' text-[52px]'>Paradise Of Programming Ninjas</h1>
          <h1 className=' text-[52px]'>Connect, Learn And</h1>
          <h1 className=' text-[52px]'>Shine</h1>
          <p className=' text-center font-poppins opacity-75 text-[13px]'>Welcome to the Paradise of Programming Ninjas, where coding enthusiasts <br></br> come together to connect, learn, and shine. Join our community of tech-savvy heroes as <br></br> we embark on a journey of innovation and mastery in the world of programming.</p>
          <br />
          <button  className=' mt-1 pt-3 pb-3 px-3  pe-3 hero-blue-btn text-black rounded flex justify-center items-center'>Get Started</button>
        </div>
        <div className=' fontimg absolute w-[100%] h-[100vh]   z-[5]' />
      </div>
    </div>
  )
}
