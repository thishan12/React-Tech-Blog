import React, { useState } from 'react';
import TechMenu from './TechMenu';
import PDFSCards from './PDFSCards';
import TechSearch from './TechSearch';

export default function ParentforTech() {
    const [color, setColor] = useState('All');

    if(color == ''){
        setColor('All')
    }

    return (
        <div>
            <TechSearch  color={color} setColor={setColor} />
            <TechMenu color={color} setColor={setColor} />
            <PDFSCards color={color} />
        </div>
    );
}
