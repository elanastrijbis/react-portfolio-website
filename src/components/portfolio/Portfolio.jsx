import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hello Dog',
    subtitle: 'Ruby on Rails | Sass',
    github: 'https://github.com/elanastrijbis/Hellodog',
    demo: 'https://hellodog-app.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Space Out',
    subtitle: 'Ruby on Rails | Sass',
    github: 'https://github.com/elanastrijbis/Space-0ut',
    demo: 'https://young-garden-06123.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Soundwave',
    subtitle: 'HTML | CSS',

    github: 'https://github.com/elanastrijbis/Soundwave',
    demo: 'Demo placeholder 3'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Placeholder 4',
    demo: 'Demo placeholder 4'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Placeholder 5',
    github: 'https://github.com/elanastrijbis',
    demo: 'Demo placeholder 5'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Placeholder 6',
    github: 'https://github.com/elanastrijbis',
    demo: 'Demo placeholder 6'
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtitle, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4 className='portfolio__subtitle'>{subtitle}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Live</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
