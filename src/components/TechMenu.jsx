import React from 'react'
import { TechMenuses } from '../constants'
import ParentforTech from './ParentforTech'

import { useState } from 'react'

export default function TechMenu({color,setColor}) {
    
    return (
        <div className='p-[53px] flex flex-row'>
            <div className=' mt-10 bg-techmenu w-[100%] rounded-[25px] flex me-1'>
                {
                    TechMenuses.map((Menus) => (
                        <label htmlFor="" key={Menus.id} className={`${Menus.title == color ? 'footer-btn' : ''} pt-2 pb-2 ${Menus.id == 3 ? 'w-[18%]' : Menus.id == 4 ? 'w-[18%]' : "w-[16%]"}  duration-[0.4s]  cursor-pointer rounded-[25px] text-center ${Menus.title == color ? 'text-black' :'text-white'}`} onClick={() => (setColor(Menus.title))}>{Menus.title}</label>
                    ))
                }
            </div>
        </div>
    )
}
