import React, { useState } from 'react';
import ListElement from './components/list/ListElement.jsx'
import Slide from "./components/slide/Slide.jsx";
import {dataList, dataSections} from "./components/data.js";
import './main.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss/autoplay'
import 'swiper/scss/pagination'
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/scss';

export default function App() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <h3 className="h3">front-end</h3>
                        <ul className="list">
                            <ListElement {...dataList[0]} />
                            <ListElement {...dataList[1]} />
                            <ListElement {...dataList[2]} />
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="main">
                <div className="container">
                    <Swiper className="swiper"
                            slidesPerView={1}
                            pagination={true}
                            modules={[Pagination, Autoplay]}
                            autoplay={false}
                            loop={true}
                            speed={2000}
                            spaceBetween={20}>
                        <SwiperSlide>
                            <Slide {...dataSections[0]}></Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide {...dataSections[1]}></Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide {...dataSections[2]}></Slide>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}