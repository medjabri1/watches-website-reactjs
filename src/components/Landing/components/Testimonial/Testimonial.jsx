import React from 'react'

import "./Testimonial.css";

function Testimonial() {
    return (
        <div className="testimonial__container">

            <section className="section testimonial" id="testimonial">
                <div className="testimonial__container">

                    <h1 className="section__title">Feedback from our clients</h1>

                    <div className="glide" id="glide_4">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide">
                                    <div className="testimonial__box">
                                        <div className="client__image">
                                        </div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                                            quibusdam consequatur eligendi unde officia ex quae.ipsum dolor sit amet </p>
                                        <div className="client__info">
                                            <h3>John Smith</h3>
                                            <span>Founder at Apple</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="testimonial__box">
                                        <div className="client__image">
                                        </div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                                            quibusdam consequatur
                                            eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing</p>
                                        <div className="client__info">
                                            <h3>John Smith</h3>
                                            <span>Founder at Apple</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="glide__slide">
                                    <div className="testimonial__box">
                                        <div className="client__image">
                                        </div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                                            quibusdam consequatur
                                            eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                                            nesciunt tempore</p>
                                        <div className="client__info">
                                            <h3>John Smith</h3>
                                            <span>Founder at Apple</span>
                                        </div>
                                    </div>

                                </li>
                                <li className="glide__slide">
                                    <div className="testimonial__box">
                                        <div className="client__image">
                                        </div>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                                            quibusdam consequatur
                                            eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                                            nesciunt tempore</p>
                                        <div className="client__info">
                                            <h3>John Smith</h3>
                                            <span>Founder at Apple</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonial