import React, { useEffect, useState } from 'react'

import "./Browse.css";

import watches__data from "../../watches.db.json";

function Browse() {

    const [watches, setWatches] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let data = watches__data.watches;
        setWatches(data)
        console.log(watches);
    }, []);

    useEffect(() => {
        let data = watches__data.watches;
        setWatches(data.filter(watch => watch.Model.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [searchQuery])

    return (
        <div className="browse__container">
            <div className="browse__wrapper">

                <div className="search__container">
                    <label htmlFor="search">Search for watches</label>
                    <input
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        placeholder="Search for products"
                    />
                </div>

                <div className="products__list">

                    {

                        watches.length > 0 &&

                        watches.map((watch, index) => {
                            return (
                                <div className="product__item" key={index}>
                                    <div className="product__item__background">
                                        <img className="product__item__image" src={watch.imgs[0]} alt="Product Image" />
                                    </div>
                                    <div className="product__item__content__container">
                                        <div className="product__item__content">
                                            <div className="product__item__content__info">
                                                <h1 className="product__item__model">{watch.Model}</h1>
                                                <h3 className="product__item__brand">{watch.Brand}</h3>
                                                <h3 className="product__item__price">{watch.Price}$</h3>
                                            </div>

                                            <div className="product__item__content__action">
                                                <h3 className="product__item__add__cart">Details</h3>
                                                <h3 className="product__item__details">Add To Cart</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                

            </div>
        </div>
    )
}

export default Browse