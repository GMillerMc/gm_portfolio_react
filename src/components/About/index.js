import React, { useEffect, useState, } from 'react';
import './index.scss';

import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';

import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}
                    />
                </h1>
                <p>I'm an ambitious and hardworking individual looking for my first role in Tech. Over the past 12 weeks I have been given an opportunity to immerse myself in the the industry and learned about the tools needed in the modern environment. It goes without saying I cannot wait to get going and further enhance my knowledge and skills. </p>
                <p>My experiences in life to date have given me a different perspective as I do not come from a traditional route, however I believe this will only benefit the company I work for, it is good to have a wide array of voices as the industry we are in touches a wide range of people. </p>
                <p> Outside of coding I am a big fan of music, especially electronic music. Click on the sidebar links and have a listen to one of my mixes on Soundcloud or Mixcloud. Although, this has taken a backseat as I've embarked on my coding journey, there will be more coming soon. My other great passion is football and I regularly follow the best team in London, Chelsea!</p>
                <p>If you like what you have seen and read then please don't hesitate to get in touch to find out more.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className="face5">
                        <FontAwesomeIcon icon={faPython} color="#FFE873" />
                    </div>

                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>

                
                </div>

            </div>

        </div>
        <Loader type="line-scale-pulse-out-rapid" />
        </>
    )
}

export default About
