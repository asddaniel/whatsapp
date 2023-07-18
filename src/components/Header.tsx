import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import IconCamera from './IconCamera';
import IconSearch from './IconSearch';
import IconMenu from './IconMenu';

import React, { ReactNode } from 'react'

export default class Header extends React.Component{

    slider():void{
        document.querySelector('.indicator-w')?.classList.toggle('aller');
        console.log('click');
    }

    render(): React.ReactNode {
        return <div className="container-fluid bg-success pt-3 pb-0">
            <div className="row">
                <div className="text-white fw-bold h5 col-lg-9 col-7">WhatsApp</div>
                <div className="col-lg-3 col-5 text-white fw-bold">
                    <div className="text-white d-flex align-items-center justify-content-between">
                        <div className="text-white">
                            <IconCamera></IconCamera>
                        </div>
                        <div className="text-white">
                            <IconSearch></IconSearch>
                        </div>
                        <div className="text-white">
                            <IconMenu></IconMenu>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="row pb-0">
                        <div className="d-flex justify-content-center col-lg-3 col-4 ">
                            <div className="text-white fw-bold text-center border-3 px-5 ">Disc</div>

                        </div>
                        <div className="d-flex justify-content-center col-lg-3 col-4 ">
                            <div className="text-white fw-bold text-center border-3 px-5 ">Statut</div>

                        </div>
                        <div className="d-flex justify-content-center col-lg-3 col-4 ">
                            <div className="text-white fw-bold text-center border-3 px-5 ">Appels</div>

                        </div>


                    </div>
                    <div className="row">
                    <Swiper className='pt-0  mt-0 row ' slidesPerView={1}
                    onSlideChange={this.slider.bind(this)}
                    
                    >
                <SwiperSlide className='col-lg-3 colonne-4 ' >
                    <div className="row pt-3  ">
                        <div className="  pt-0">
                            <div className="text-white fw-bold text-center border-3 px-5  border-bottom border-white transitive indicator-w "></div>

                        </div>
                       


                    </div>
                    
                </SwiperSlide>
                <SwiperSlide className='col-lg-3 colonne-4 '>
                    <div className="row pt-3  ">
                        <div className="  pt-0">
                            <div className="text-white fw-bold text-center border-3 px-5 "></div>
                           
                        </div>
                       


                    </div>
                    
                </SwiperSlide>
                <SwiperSlide className='col-lg-3 colonne-4'></SwiperSlide>
                
            </Swiper>
                    </div>
            
        </div>
    }

}