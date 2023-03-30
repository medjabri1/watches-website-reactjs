import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./Product.css";

function Product() {

    const WATCH_ID = useParams().id;
    const [watch, setWatch] = useState({});
    const [imgIndex, setImgIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = () => {

        let api__url = "http://localhost:3000/watches/" + WATCH_ID;

        axios.get(api__url)
            .then(response => {
                setWatch(response.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="product__container">
            <div className="product__wrapper">

                {
                    loaded &&
                    <div className="product__card">
                        <div className="product__card__section">
                            <div className="product__cover">
                                <div className="product__image__container">
                                    <img className="product__current__image" src={watch.imgs[imgIndex]} alt="Product" />
                                    <div className="browse__images">
                                        {
                                            watch.imgs.map((img, index) => {
                                                return(
                                                    <img src={img} key={index} alt="Product" onClick={() => setImgIndex(index)} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product__card__section">
                            <div className="product__info">
                                <h1 className="product__model">{watch.Model}</h1>

                                <div className="product__info__content">
                                    <div className="info__item">
                                        <span className="info__item__title">Brand</span>
                                        <span className="info__item__value">{watch.Brand}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Case Material</span>
                                        <span className="info__item__value">{watch.Case_Material}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Strap Material</span>
                                        <span className="info__item__value">{watch.Strap_Material}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Movement Type</span>
                                        <span className="info__item__value">{watch.Movement_Type}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Water Resistance</span>
                                        <span className="info__item__value">{watch.Water_Resistance}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Case Diameter</span>
                                        <span className="info__item__value">{watch.Case_Diameter}mm</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Case Thickness</span>
                                        <span className="info__item__value">{watch.Case_Thickness}mm</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Band Width</span>
                                        <span className="info__item__value">{watch.Band_Width}mm</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Dial Color</span>
                                        <span className="info__item__value">{watch.Dial_Color}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Crystal Material</span>
                                        <span className="info__item__value">{watch.Crystal_Material}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Power Reserve</span>
                                        <span className="info__item__value">{watch.Power_Reserve}</span>
                                    </div>

                                    <div className="info__item">
                                        <span className="info__item__title">Complications</span>
                                        <span className="info__item__value">{watch.Complications}</span>
                                    </div>

                                    <div className="info__item s-between">
                                        <h1 className="product__price">{watch.Price}$</h1>
                                        <h1 className="product__add__to__cart">+ Cart</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Product