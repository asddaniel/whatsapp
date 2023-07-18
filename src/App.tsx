import { useState } from 'react'

import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Conversation from './components/Conversation';
import Status from './components/Status';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => document.querySelector('.indicator-w')?.classList.toggle('aller')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=''>
        <Conversation></Conversation>
      </SwiperSlide>
      <SwiperSlide>
      <Status></Status>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      
    
    </>
  )
}

export default App
