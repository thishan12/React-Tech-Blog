import React from 'react'
import Tech from '../assets/Tech.png'
import Play from '../assets/play.png'
import { Link } from 'react-router-dom'
import { Addemail } from '../constants'
import toast, { Toaster } from 'react-hot-toast';

export default function Footer() {
  return (
    <div className=' footerbg flex flex-col  mt-[60px]'>
      <div className=' flex flex-row'>
        <div className=' w-[40%]  pt-5 '>
          <img src={Tech} alt='Tech-universe' className=' md:ml-[0px] ml-[-30px] md:w-[290px] md:h-[60px] w-[230px] h-[50px]' />
          <p className=' mx-[58px] mt-5  font-poppins  text-[14px] text-stone-400'>Tech Universe is a Where Innovation Meets Exploration. Explore, Learn, and Expand Your Tech Horizons with Us.</p>
        </div>
        <div className=' w-[30%]  pt-5'>
          <label className='font-thin text-[19px]'>Usefull Links</label>
          <Toaster toastOptions={{
            // Define default options
            className: ' text-normal',
            duration: 3000,

          }} />
          <ul className=' mt-4 cursor-pointer'>
            <Link to={'/'}><li className='  mb-1 font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Home</li></Link>
            <Link to={'/Blog'}> <li className='  mb-1 font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Blog</li></Link>
            <Link to={'/Technologies'}><li className='  mb-1 font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Technologies</li></Link>
          </ul>
        </div>
        <div className=' w-[30%]  pt-5'>
          <label className=' font-thin text-[19px]'>Popular Technologies</label>
          <ul className=' mt-4 cursor-pointer'>
            <li className=' mb-1 font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />React Native</li>
            <li className=' mb-1  font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />React</li>
            <li className=' mb-1  font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Flutter</li>
            <li className=' mb-1  font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Swift</li>
            <li className=' mb-1  font-[200] text-[13px] flex-row flex items-center p-1'><img src={Play} className=' w-2 h-2 me-2' />Ruby</li>
          </ul>
        </div>
      </div>
      <div className=' w-[100%] flex flex-col  justify-center px-[50px]  pt-16'>
        <div className=' flex flex-row rounded-tl-[20px] rounded-tr-[20px] bg-black-gradient-2 px-5 pe-5 pt-3 pb-1'>
          <div className=' w-[50%]  flex items-center justify-end'>
            <h2 className=' text-[30px]'>Subscribe For New Updates</h2>
          </div>
          <div className=' w-[50%] flex items-center justify-start px-24'>
            <input placeholder='Email..' id='newsEmail' className=' bg-white font-poppins pt-2 px-4 pb-2 pe-4 rounded-tl-[25px] rounded-bl-[25px] outline-none border-none text-[14px] text-black text-opacity-70' />
            <button onClick={Addemail} className=' footer-btn -translate-x-4 font-bold pt-2 pb-2 px-4 pe-4 rounded-[25px] outline-none border-none text-[14px] text-black'>Subscribe</button>
          </div>
        </div>
        <hr className=' opacity-30' />
        <div className=' flex flex-row copybg'>
          <div className=' w-[100%] flex flex-row justify-center items-center  bg-black-gradient pt-1'>
            <p className=' text-[11px] font-poppins'>&copy;copyright Techuniverse.com - 2023 || All Rights Reserved || Powered By Himicx Software Solutions</p>
          </div>
        </div>
      </div>
    </div>
  )
}
