import React from 'react'

export default function StartJ() {
  return (
    <div className='flex flex-row p-6 mx-[58px] mt-24 bg-black-gradient-3 rounded-[10px] shadow mb-[100px]'>
      <div className=' flex flex-col justify-center w-[60%] '>
        <h1 className=' text-[40px] mb-1 font-thin'>Start Your Journey With Us</h1>
        <p className='  font-poppins  text-[14px] text-stone-400'>Embark on your tech journey with us. From coding novices to seasoned developers, we're your trusted companion for knowledge and growth.</p>
      </div>
      <div className=' flex flex-row items-center justify-center  w-[40%]'>
        <button className='blue-btn pt-4 pb-4 px-8 pe-8 rounded'>Start Now</button>
      </div>
    </div>
  )
}
