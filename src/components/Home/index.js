import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';
import './index.scss';

import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-g.png'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','o','r','g','e']
    const jobArray1 = ['J','u','n','i','o','r']  
    const jobArray2 = ['s','o','f','t','w','a','r','e']
    const jobArray3 = ['e','n','g','i','n','e','e','r','.']

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>I,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                
                <img src={LogoTitle} alt="developer" />
                
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray} 
                idx={15} /> <br /> 
                
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray1} 
                idx={15} /> 
                
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray2} 
                idx={15} /> <br /> 
                

                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray3} 
                idx={15} /> <br /> 
                </h1>
                <br />
                
                <h2> Javascript / React / Python / Django / Flask </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="line-scale-pulse-out-rapid" />
    </>
    )
}

export default Home
