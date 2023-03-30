import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./Product.css";

function Product() {

    const WATCH_ID = useParams().id;
    const [watch, setWatch] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = () => {

        let api__url = "http://localhost:3000/watches/" + WATCH_ID;

        axios.get(api__url)
            .then(response => {
                setWatch(response.data);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="product__container">
            <div className="product__wrapper">
                <h1>{WATCH_ID}</h1>
                <h1>{watch.Model}</h1>
            </div>
        </div>
    )
}

export default Product