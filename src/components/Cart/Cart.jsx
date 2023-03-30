import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GLOBAL_ACTIONS } from '../../Context/WatchesWebsiteContext';
import { useWatchesWebsite } from '../../Hook/WatchesWebsiteHooks';

import "./Cart.css"

function Cart() {

    const [state, dispatch] = useWatchesWebsite();
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0;

        state.cart.map((item) => {
            total += (item.quantity*Number(item.Price.replace(',', '')));
        });

        setTotal(total);

    }, [state.cart]);

    const base__api__url = "http://localhost:3000";

    let removeItem = (watch) => {
        
        let api__url = base__api__url + "/cart/"+ watch.id

        axios.delete(api__url)
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.REMOVE_CART, payload: watch.id })
            })
            .catch(err => console.error(err));
    }

    let removeQuantity = (watch) => {

        if(watch.quantity < 1) {
            return;
        }

        let api__url = base__api__url + "/cart/"+ watch.id

        axios.put(api__url, { ...watch, quantity: watch.quantity-1})
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.UPDATE_ITEM_CART, payload: response.data })
            })
            .catch(err => console.error(err));
    }

    let addQuantity = (watch) => {

        if(watch.quantity > 19) {
            return;
        }

        let api__url = base__api__url + "/cart/"+ watch.id

        axios.put(api__url, { ...watch, quantity: watch.quantity+1})
            .then(response => {
                dispatch({ type: GLOBAL_ACTIONS.UPDATE_ITEM_CART, payload: response.data })
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="cart__container">

            <div className="cart__wrapper">
                
                <div className="cart__list">

                    <h1 className="cart__list__section__title">Cart List ({state.cart.length})</h1>

                    {
                        state.cart.map((watch, index) => {
                            return (
                                <div className="cart__item" key={index}>
                                    <div className="cart__item__cover">
                                        <img src={watch.imgs[0]} alt="" />
                                    </div>
                                    <Link to={"/product/"+ watch?.id} className="cart__item__info">
                                        <h1 className="cart__item__model">{ watch?.Model }</h1>
                                        <h3 className="cart__item__brand">{ watch?.Brand }</h3>
                                    </Link>
                                    <div className="cart__item__actions">
                                        <div className="cart__item__quantity">
                                            <p className="cart__item__quantity__remove" onClick={() => removeQuantity(watch)}>-</p>
                                            <span className="cart__item__quantity__value">{watch?.quantity}</span>
                                            <p className="cart__item__quantity__add" onClick={() => addQuantity(watch)}>+</p>
                                        </div>
                                        <p className="cart__item__delete" onClick={() => removeItem(watch)}>+</p>
                                    </div>
                                </div>
                            )
                        })

                    }

                    <h3 className="cart__list__total">Total: { total }$</h3>

                </div>

            </div>

        </div>
    )
}

export default Cart