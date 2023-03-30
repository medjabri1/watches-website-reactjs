import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GLOBAL_ACTIONS } from '../../Context/WatchesWebsiteContext';
import { useWatchesWebsite } from '../../Hook/WatchesWebsiteHooks';

import "./Browse.css";

function Browse() {

    const [searchQuery, setSearchQuery] = useState('');

    const [state, dispatch] = useWatchesWebsite();

    const base__api__url = "http://localhost:3000";

    useEffect(() => {
        fetchData(searchQuery.trim());
    }, [searchQuery])

    let fetchData = (query) => {

        let api__url = "";

        if(query == "") {
            api__url = base__api__url+ "/watches";
        } else {
            api__url = base__api__url+ "/watches?q="+query
        }

        axios.get(api__url)
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.SET_WATCHES, payload: response.data })
            })
            .catch(err => console.error(err));
    }

    let addToCart = (watch) => {

        let api__url = base__api__url + "/cart"

        let found = false;

        state.cart.map((item) => {
            if(item.id == watch.id) {
                found = true;
            }
        })

        if(found) {

            addQuantity(watch);

        } else {
    
            axios.post(api__url, {...watch, quantity: 1})
                .then(response => {
                    dispatch({ type: GLOBAL_ACTIONS.ADD_CART, payload: response.data })
                })
                .catch(err => console.error(err));
        }
    }

    let addQuantity = (watch) => {

        let quantity = 1;

        state.cart.map((item) => {
            if(item.id == watch.id) {
                quantity = item.quantity != null ? item.quantity : 1;
            }
        })

        let api__url = base__api__url + "/cart/"+ watch.id

        axios.put(api__url, { ...watch, quantity: quantity+1})
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.UPDATE_ITEM_CART, payload: response.data })
            })
            .catch(err => console.error(err));
    }

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

                        state.watches.length > 0 &&

                        state.watches.map((watch, index) => {
                            return (
                                <div className="product__item" key={index} style={{animationDelay: index*200 + "ms"}}>
                                    <div className="product__item__background">
                                        <img className="product__item__image" src={watch.imgs[0]} alt="Product Cover" />
                                    </div>
                                    <div className="product__item__content__container">
                                        <div className="product__item__content">
                                            <div className="product__item__content__info">
                                                <h1 className="product__item__model">{watch.Model}</h1>
                                                <h3 className="product__item__brand">{watch.Brand}</h3>
                                                <h3 className="product__item__price">{watch.Price}$</h3>
                                            </div>

                                            <div className="product__item__content__action">
                                                <Link to={`/product/${watch.id}`} className="product__item__details">Details</Link>
                                                <h3 className="product__item__add__cart" onClick={()=> addToCart(watch)}>Add To Cart</h3>
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