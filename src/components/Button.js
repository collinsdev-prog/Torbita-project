import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='apply-now'>
            <button className='btn'>Apply Now</button>
        </Link>
    );
}