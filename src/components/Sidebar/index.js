import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './index.scss'

import LogoG from '../../assets/images/logo-g.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMixcloud, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () =>  {
  return (
    <div className="nav-bar"> 
      <Link className="logo" to="/">
        <img src={LogoG} alt ="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassame="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" 
          rel="noreferrer"
          href="https://www.linkedin.com/in/george-miller-mccall-895711169/"
          >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" 
          rel="noreferrer"
          href="https://github.com/GMillerMc"
          >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
        <a target="_blank" 
          rel="noreferrer"
          href="https://soundcloud.com/mthr33"
          >
          <FontAwesomeIcon icon={faSoundcloud} color="#4d4d4e" />
          </a>
        </li>
        <li>
        <a target="_blank" 
          rel="noreferrer"
          href="https://www.mixcloud.com/Gmill%C3%A9/"
          >
          <FontAwesomeIcon icon={faMixcloud} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  
    )
  }



export default Sidebar
