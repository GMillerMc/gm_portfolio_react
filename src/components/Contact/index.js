import React, { useState, useEffect } from 'react';
import './index.scss';

// import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    
    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'O', 'M', 'I', 'N', ' G', ' ', 'S', 'O', 'O', 'N']} idx={15}
                    />
                </h1>
                </div>
                </div>
                <Loader type="line-scale-pulse-out-rapid" />
                </>
    )
}

export default Contact
