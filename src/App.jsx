import React, { useState } from "react";
import ListElement from "./components/list/ListElement.jsx";
import Slide from "./components/slide/Slide.jsx";
import { dataList, dataSections } from "./components/data.js";
import "./main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import { dataTabs } from "./components/data.js";



//  function Test1({children, onClick}) {

//     return (
//      <div onClick={() => onClick()}>
//         {children}
//      </div>
//     )
//  }

export default function App() {
    const [tab, setTab] = useState('')
    function viewTab(type) {
        // console.log(type)
        setTab(type)
    }
    // const [content, setContent] = useState('')
    // function testClick(type) {
    //     setContent(type)
    // }
    // const testArr = {wey: 'body1', easy: 'body2', program: 'body3'}
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
          <section className="section">
            <Swiper
              className="swiper"
              slidesPerView={1}
              pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay={false}
              loop={true}
              speed={2000}
              spaceBetween={20}
            >
              <SwiperSlide>
                <Slide {...dataSections[0]} tab={viewTab}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide {...dataSections[1]} tab={viewTab}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide {...dataSections[2]} tab={viewTab}></Slide>
              </SwiperSlide>
              <SwiperSlide>
                <Slide {...dataSections[3]} tab={viewTab}></Slide>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="section">
            <div className="tab">
                <p className="tab__item">{dataTabs[0][tab]}</p>
            </div>    
          </section>
        </div>
      </div>
    </>
  );
}
