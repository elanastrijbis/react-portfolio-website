import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'

const Footer = () =>  {
  return (
    <footer>
      <a href="#home" className='footer__logo'>ELANA</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Elana Strijbis. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
