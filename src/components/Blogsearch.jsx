import React from 'react'
import Backg from '../assets/vecteezy_woman-hand-holding-virtual-global-internet-connection_12792723_578.jpg'
import Searche from '../assets/magnifying-glass (1).png'
import Delete from '../assets/delete.png';

export default function Blogsearch({setColor}) {
    return (
        <div className=' h-[300px] w-[100%] flex flex-col  p-[52px]'>
            <div className='h-[300px] z-[2]'>
                <img src={Backg} className=' w-[1234px]  h-[300px] rounded-lg ' />
            </div>
            <div className='  h-[300px] w-[92%]  z-[5]  searchfg rounded-lg absolute' />
            <div className=' h-[300px] w-[92%] z-[7] rounded-lg absolute flex justify-center items-center flex-col p-8'>
                <h2 className=' font-bold text-[58px]'>Read, Learn And Shine</h2>
                <p className=' text-center font-poppins text-white opacity-70 text-[14px]'>Welcome to our comprehensive blog, where you can explore a vast array of topics that encompass the global landscape. Dive into the realms of world affairs, cutting-edge technology, the latest advancements in science, insightful political analysis, and so much more. Whether you're a seasoned enthusiast or a curious explorer, our blog caters to your thirst for knowledge.

                    Stay in the know by subscribing to our email service. By doing so, you'll receive prompt alerts every time we unveil fresh and thought-provoking blog posts, ensuring you never miss an opportunity to broaden your understanding of the world and its many facets.</p><br />
                <div className='  flex flex-row bg-[#D9D9D9]  p-1 w-[50%] rounded   items-center'>
                    <img src={Searche} alt='search' />
                    <input className=' bg-[#D9D9D9] outline-none text-black p-1 w-[100%]' placeholder='Search...' id='sea' onChange={(e) => {
                        e.preventDefault();
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
