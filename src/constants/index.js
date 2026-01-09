import Reactss from '../assets/blog-thumb-1.png'
import Vue from '../assets/How-to-Migrate-a-large-project-from-Vue-2-to-Vue-3.jpg'
import Laravel from '../assets/images.jpg'
import Three from '../assets/OIP.jpg'
import Politics from '../assets/Israel-Palestine-crisis.webp'
import NanoTech from '../assets/pexels-gursher-gill-18633028.jpg'
import Progra from '../assets/programming.jpg'
import Apple from '../assets/photo-1603791239531-1dda55e194a6.jpg'
import Politicses from '../assets/istockphoto-157417912-612x612.jpg'

import TypeS from '../assets/typescript.png';
import Searche from '../assets/magnifying-glass (1).png';
import Delete from '../assets/delete.png';
import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const navLinks = [
  {
    in: '250px',
    Path: '/',
    id: "Home",
    title: "Home",
  },
  {
    in: '320px',
    Path: '/Technologies',
    id: "Technologies",
    title: "Technologies",
  },
  {
    in: '290px',
    Path: '/Blog',
    id: "Blog",
    title: "Blog",
  },
];



export function Addemail() {

  var email = document.getElementById("newsEmail").value;

  fetch(`http://localhost/blog/addEmail.php?Email=${email}`, {
    method: "GET",
  })
    .then((response) => response.text())
    .then((data) => {
      if (data == 'success') {
        toast.success("Happy Subscribing Baby");
      } else {
        toast.error(data);
      }// This will display "Hi" sent by the PHP script
    })
    .catch((error) => console.log(error));

  return null; // You need to return something from your component
};

export const TechMenuses = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'ReactJS',
  },
  {
    id: '3',
    title: 'VueJS',
  },
  {
    id: '4',
    title: 'Ruby',
  },
  {
    id: '5',
    title: 'NodeJS',
  },
  {
    id: '7',
    title: 'Cyber Security',
  },
]

export const PDFSCardsss = [
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
  {
    id: "1",
    img: React,
    Likes: '12',
    title: "Rect Js Full Course",
    des: 'Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.Master React.js with our comprehensive course, diving into its core concepts, components, and state management to create powerful web applications.',
    tags: [
      {
        color: 'ff',
        name: 'React',
      },

      {
        color: 'ff',
        name: 'Web',
      },
      {
        color: 'ff',
        name: 'FrontEnd',
      },
    ]
  },
]
export const BlogMenuses = [
  {
    id: '1',
    title: 'All',
  },
  {
    id: '2',
    title: 'Technology',
  },
  {
    id: '3',
    title: 'Science',
  },
  {
    id: '5',
    title: 'Entertainment',
  },
  {
    id: '4',
    title: 'Politics',
  },

  {
    id: '6',
    title: 'Sports',
  },
]
export const BlogCardii = [
  {
    id: '1',
    img: Apple,
    Likes: '10',
    Views: '13k',
    Date: '23th March, 2023',
    title: "What is Nanotechnology and What Can It Do?",
    des: 'Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.',
    tags: [
      {
        color: 'fe',
        name: 'Science',
      },
    ]

  },
  {
    id: '2',
    img: Politicses,
    Likes: '18',
    Views: '13k',
    Date: '23th March, 2023',
    title: "What is Nanotechnology and What Can It Do?",
    des: 'Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.',
    tags: [
      {
        color: 'fe',
        name: 'Science',
      },
    ]

  },
  {
    id: '3',
    img: Apple,
    Likes: '10',
    Views: '13k',
    Date: '23th March, 2023',
    title: "What is Nanotechnology and What Can It Do?",
    des: 'Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.Nanoscience and nanotechnology is an innovative field of research that has accomplished a great deal in the decades since Nobel Prize Laureate Richard Feynman introduced the concept in 1959. In the simplest terms, it deals with materials and devices with nanometer dimensions.',
    tags: [
      {
        color: 'fe',
        name: 'Science',
      },
    ]

  },
]