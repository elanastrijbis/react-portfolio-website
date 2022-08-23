import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="www.linkedin.com/in/elanastrijbis" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/elanastrijbis"><ImGithub /></a>
    </div>
  )
}

export default HeaderSocials
