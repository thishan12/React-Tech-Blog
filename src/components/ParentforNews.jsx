import React from 'react'
import Blogsearch from './Blogsearch'
import BlogCards from './BlogCards'
import BlogMenu from './BlogMenu'
import { useState } from 'react';


export default function ParentforNews() {
    const [Color, setColor] = useState('All');
    return (
        <div>
            <Blogsearch setColor={setColor}/>
            <BlogMenu Color={Color} setColor={setColor} />
            <BlogCards  Color={Color} />
        </div>
    )
}
