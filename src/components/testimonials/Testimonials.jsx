import React from 'react'
import './testimonials.css'
import 'swiper/swiper.min.css';
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';





import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  { avatar: AVTR1,
    name: "Ernst",
    review: "Lorem ipsu m, dolor sit amet consectetur adipisicing elit. Autem ab qui distinctio eaque voluptate eum recusandae, veritatis repudiandae doloremque consequatur corporis. Consequatur libero harum numquam ad, ullam voluptatibus autem sunt."
  },
  {
    avatar: AVTR2,
    name: "Lisa",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ab qui distinctio eaque voluptate eum recusandae, veritatis repudiandae doloremque consequatur corporis. Consequatur libero harum numquam ad, ullam voluptatibus autem sunt."

  },
  {
    avatar: AVTR3,
    name: "John",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ab qui distinctio eaque voluptate eum recusandae, veritatis repudiandae doloremque consequatur corporis. Consequatur libero harum numquam ad, ullam voluptatibus autem sunt."
  },
  {
    avatar: AVTR4,
    name: "Laan",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ab qui distinctio eaque voluptate eum recusandae, veritatis repudiandae doloremque consequatur corporis. Consequatur libero harum numquam ad, ullam voluptatibus autem sunt."
  }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  )
}

export default Testimonials
