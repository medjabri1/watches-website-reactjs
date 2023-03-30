import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { GLOBAL_ACTIONS } from '../../../../Context/WatchesWebsiteContext';
import { useWatchesWebsite } from '../../../../Hook/WatchesWebsiteHooks';

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

    const [state, dispatch] = useWatchesWebsite();

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = () => {

        let api__url = "http://localhost:3000/watches";

        axios.get(api__url)
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.SET_WATCHES, payload: response.data });
            })
            .catch(err => console.error(err));
    }

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
                    state.watches.map((item, index) => {
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