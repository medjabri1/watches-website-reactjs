import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBasketShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

import { GLOBAL_ACTIONS } from '../../Context/WatchesWebsiteContext';
import { useWatchesWebsite } from '../../Hook/WatchesWebsiteHooks';

import './Header.css';

function Header() {

	const [state, dispatch] = useWatchesWebsite();

	const base__api__url = "http://localhost:3000";

	useEffect(() => {
		fetchCart();
	}, []);

	let fetchCart = (query) => {

		let api__url = base__api__url + "/cart";

		axios.get(api__url)
			.then(response => {
				dispatch({ type: GLOBAL_ACTIONS.SET_CART, payload: response.data })
			})
			.catch(err => console.error(err));
	}

	return (
		<div className="header__container">
			<div className="header__nav">
				<h1 className="header__nav__logo">
					<NavLink to="/">Watch</NavLink>
				</h1>

				<ul className="header__nav__list">

					<li className="header__nav__list__item">
						<NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
					</li>
					<li className="header__nav__list__item">
						<NavLink to="/browse" className={({ isActive }) => (isActive ? 'active' : '')}>Browse</NavLink>
					</li>
					<li className="header__nav__list__item">
						<NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>Cart</NavLink>
					</li>

				</ul>
				<ul className="header__nav__actions">
					<li className="header__nav__actions__item">
						<FontAwesomeIcon icon={faUser} />
					</li>
					<NavLink to="/browse">
						<li className="header__nav__actions__item">
							<FontAwesomeIcon icon={faSearch} />
						</li>
					</NavLink>
					<NavLink to="/cart">
						<li className="header__nav__actions__item">
							<FontAwesomeIcon icon={faBasketShopping} />
							<span>{state.cart.length}</span>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	)
}

export default Header