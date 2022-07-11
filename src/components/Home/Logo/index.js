import React from 'react';
import './index.scss';
import LogoG from '../../../assets/images/logo-g.png'

const Logo = () => {
    return (
        <>
        <div className='logo-container'> 
            <img className='solid-logo' src={LogoG} alt="G"/>
            
        </div>
        </>
    )
}

export default Logo

