import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Placeholder heading 1</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
          </ul>
        </article>
        {/* End of first card */}
        <article className='service'>
          <div className="service__head">
            <h3>Placeholder heading 2</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
          </ul>
        </article>
        {/* End of second card */}
        <article className='service'>
          <div className="service__head">
            <h3>Placeholder heading 3</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>lorem short lorem short lorem short lorem short</p>
            </li>
          </ul>
        </article>
        {/* End of 3rd card */}
      </div>
    </section>
  )
}

export default Services
