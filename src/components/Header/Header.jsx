import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBasketShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

import './Header.css';

function Header() {

	const cart_items_nbr = 4;

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
					<li className="header__nav__actions__item">
						<FontAwesomeIcon icon={faSearch} />
					</li>
					<li className="header__nav__actions__item">
						<FontAwesomeIcon icon={faBasketShopping} />
						<span>{cart_items_nbr}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header