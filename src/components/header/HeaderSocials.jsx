import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com"><BsLinkedin/></a>
      <a href="https://github.com"><ImGithub /></a>
      <a href="https://dribble.com"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials
