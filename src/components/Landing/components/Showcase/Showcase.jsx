import React, { useRef, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Showcase.css";
import styles from "./Showcase.module.css";
import ShowcaseItem from './components/ShowcaseItem/ShowcaseItem';

function Showcase() {

    SwiperCore.use([Autoplay]);

    const items = [
        { 
            title: 'Rolex Submariner', price: 1300,
            img: 'https://cdn.shopify.com/s/files/1/0458/4492/2517/products/7_75242ebc-6cac-45bd-bb45-d23b7b21ddf4_600x.png?v=1608410600'
        },
        { 
            title: 'Tag Heuer', price: 2300,
            img: 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw39e94ec1/TAG_Heuer_Carrera/CV2A1S.FC6236/CV2A1S.FC6236_0913.png'
        },
        { 
            title: 'Seiko Prospex', price: 2300,
            img: 'https://www.seikoboutique.co.uk/wp-content/uploads/2021/03/SPB101J1.png'
        },
    ];

    return (
        <div className={styles.showcase__container}>

            <div className={styles.showcase__background}></div>

            <Swiper 
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,                  
                }}
                loop={true}
                modules={[Navigation]} 
                className="mySwiper"
            >

                {
                    items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ShowcaseItem item={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

export default Showcase