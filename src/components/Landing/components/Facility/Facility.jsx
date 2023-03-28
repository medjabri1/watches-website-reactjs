import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faMoneyBillTransfer, faBusinessTime, faCreditCard } from '@fortawesome/free-solid-svg-icons'

import "./Facility.css";

function Facility() {
    return (
        <div className="facility__main__container">
            <section className="facility__section section" id="facility">
                <div className="container">

                    <h1 className="section__title">Our Facilities</h1>

                    <div className="facility__container" data-aos="fade-up" data-aos-duration="1200">
                        <div className="facility__box">
                            <FontAwesomeIcon className="icon" icon={faTruckFast} />
                            <p>FREE SHIPPING WORLD WIDE</p>
                        </div>

                        <div className="facility__box">
                            <FontAwesomeIcon className="icon" icon={faMoneyBillTransfer} />
                            <p>100% MONEY BACK GUARANTEE</p>
                        </div>

                        <div className="facility__box">
                            <FontAwesomeIcon className="icon" icon={faCreditCard} />
                            <p>MANY PAYMENT GATWAYS</p>
                        </div>

                        <div className="facility__box">
                            <FontAwesomeIcon className="icon" icon={faBusinessTime} />
                            <p>24/7 ONLINE SUPPORT</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facility