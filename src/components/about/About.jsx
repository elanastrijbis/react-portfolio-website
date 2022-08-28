import React from 'react'
import './about.css'
import ME from '../../assets/elanacoffee.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineLaptop} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Graduate Developer</small>
            </article>
            <article className='about__card'>
              <AiOutlineLaptop className='about__icon'/>
              <h5>Stack</h5>
              <small>Fullstack</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>
                <a href="https://github.com/elanastrijibs" className='about__link'>Github</a>
              </small>
            </article>
          </div>

          <p>
            Hi there! I am Elana! A year ago I decided to change careers into tech, I developed a keen interest in the industry while having time to reflect during lockdowns. Not long after I started to code for fun in my spare time for a few months, I decided to enroll in an immersive full stack web development bootcamp at Le Wagon, which taught me to develop technical skills as well as adapting quickly and easily to new learning environments. I'm inquisitive and eager to learn new things, and I love to code and solve problems. I am currently working as a full stack developer. I enjoy working in a supportive and engaging environment with passionate team mates, while building exciting and innovative products that work to solve a problem.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
