import React, { useState } from 'react';
import { BlogCardii } from '../constants';
import Dot from '../assets/full-stop.png';
import { SimplyFade } from 'simply-fades'
import { useEffect } from 'react';
import LikeButton from './LikeButton';
const apiUrl = 'http://localhost/blog/Blog.php'

export default function BlogCards({ color }) {
    const [all, setAll] = useState(3);
    const [science, setScience] = useState(3);
    const [tech, settech] = useState(3);
    const [politics, setPolitics] = useState(3);
    const [ai, setAi] = useState(3);
    const [sports, setSports] = useState(3);
    const [blogs, setBlogs] = useState([]);

    const fetchData = (selectedColor, count) => {

        fetch(`${apiUrl}?Menu=${selectedColor}&Count=${count}`, {
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
    };

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

        <div className='flex flex-col justify-center items-start px-[58px]'>
            <div className='mt-6 grid grid-cols-1 gap-16 w-full  z-[5] '>
                {
                    blogs.map((card, index) => (
                        <BlogCard key={index} card={card} />
                    ))
                }
            </div>
            <div className=' w-full justify-center items-center flex mt-10'>
                <button onClick={handleButtonClick} className=' p-3 text-gradient text-black w-[190px] rounded-[25px] hover:-translate-y-3 duration-500'>Load More</button>
            </div>
            <div className={`blue__gradient absolute w-[400px] h-[300px] z-[2] translate-x-[100%]   ${blogs.length === 0 ? ' w-[200px] h-[100px]  translate-x-[250%]' : ' w-[400px] h-[300px]  translate-x-[100%] '}`} />
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

function BlogCard({ card }) {
    const maxle = 15;
    const maxLength = 100; // Set the maximum word count you want to display

    return (
        <div className='bg-black-gradient-2 rounded-tl-[20px] rounded-[20px] w-full  flex flex-row' simply-fade="up">
            <div className='w-[30%] h-72'>
                <img src={card.img} alt={card.title} className='w-full cursor-pointer  h-full rounded-tl-[20px] rounded-bl-[20px]' />
                <div className='w-full bg-orange-500 flex justify-between items-center -translate-y-[289px]'>
                    <div className=' pt-14 flex items-center   absolute px-2'>
                        <LikeButton likes={card.likes} />
                    </div>
                </div>
            </div>
            <div className='w-[70%] h-72'>
                <div className='w-full px-3 pt-3 pl-3 pb-2'>
                    <h2 className='font-extrabold text-[30px] cursor-pointer'>{truncateTitle(card.title, maxle)}</h2>
                    <div className='flex flex-row gap-1 mt-1 items-center'>
                        <p className={`font-sans text-[14px] cursor-pointer opacity-80 `}>{card.date}</p>
                        <img src={Dot} alt='dot' />
                        <p className={`font-sans text-[14px] cursor-pointer opacity-80 `}>{card.views} Views</p>
                        <img src={Dot} alt='dot' />

                        <p className={`fe font-sans text-[12px] cursor-pointer`}>
                            #{card.tags}
                        </p>

                    </div>
                    <p className='font-serif text-[15px] mt-4 opacity-50 border-spacing-3 tracking-wide'>
                        {truncateText(card.description, maxLength)}
                    </p>
                </div>
            </div>

        </div>

    );
}


