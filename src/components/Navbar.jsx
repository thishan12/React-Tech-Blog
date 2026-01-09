import React, { Fragment, useState } from 'react'
import Tech from '../assets/Tech.png'
import Menu from '../assets/menu (1).png'
import Close from '../assets/close.png'
import { navLinks } from '../constants'
import { Dialog, Transition } from '@headlessui/react'
import Searche from '../assets/magnifying-glass (1).png'
import { Link } from 'react-router-dom';



export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const Width = ['250px', '320px', '290px'];

  return (
    <div className=' flex justify-between items-center md:mt-0 mt-1 z-[10] relative'>
     <Link to={'/'}><img src={Tech} alt='Hoobank-logo' className={` md:ml-[0px] ml-[-30px] md:w-[290px] md:h-[60px] w-[230px] h-[50px]`} /></Link> 
 

     <img src={Menu} className='md:w-[30px] md:h-[30px] w-[24px] h-[24px] me-[60px] mt-2 cursor-pointer' onClick={() => setMenu((pre) => !pre)} /> 

      <Transition.Root show={!menu} as={Fragment}>
        <Dialog as="div" className="relative z-10 block" onClose={setMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className=""
                          onClick={() => setMenu((pre) => !pre)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <img src={Close} className='h-6  w-6' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-row overflow-y-scroll bg-black-gradient py-6 shadow-xl justify-end  items-center">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">

                        </Dialog.Title>
                      </div>
                      <div className=" mt-6  items-center flex flex-col">
                        {
                          navLinks.map((nav, index) => (
                            <div key={nav.id} className=' w-full justify-end items-center flex'>
                              <div className={`flex justify-center items-center relative cursor-pointer text-gradient px-10 pe-10 pt-2 pb-2 text-black w-[${nav.in}] mb-4  rounded-tl-[35px] rounded-bl-[35px]`}><Link to={nav.Path}>{nav.title}</Link></div>
                            </div>
                          )
                          )
                        }
                        <div className=' w-full justify-end items-center flex'>
                          <div className={`flex justify-center items-center relative text-gradient px-2 pe-2 pt-2 pb-2 text-black mb-4  rounded-tl-[35px] rounded-bl-[35px]`}>
                            <input className=' cursor-text outline-none border-none bg-white font-normal text-black rounded-[15px] px-2 pt-1 pb-1 pe-2 text-[14px]' placeholder='Search...' />
                            <img src={Searche} alt='tech-universe-search' className='w-6 h-6 mx-2 cursor-pointer' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </div>
  )
}
