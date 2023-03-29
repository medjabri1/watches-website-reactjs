import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBasketShopping, faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.css';

function Header() {

	const cart_items_nbr = 4;

	return (
		<div className={styles.header__container}>
			<div className={styles.header__nav}>
				<h1 className={styles.header__nav__logo}><Link to="/">Watch</Link></h1>
				<ul className={styles.header__nav__list}>
					<li className={styles.header__nav__list__item}><Link to="/">Home</Link></li>
					<li className={styles.header__nav__list__item}><Link to="/browse">Browse</Link></li>
					<li className={styles.header__nav__list__item}><Link to="/cart">Cart</Link></li>
				</ul>
				<ul className={styles.header__nav__actions}>
					<li className={styles.header__nav__actions__item}>
						<FontAwesomeIcon icon={faUser} />
					</li>
					<li className={styles.header__nav__actions__item}>
						<FontAwesomeIcon icon={faSearch} />
					</li>
					<li className={styles.header__nav__actions__item}>
						<FontAwesomeIcon icon={faBasketShopping} />
						<span>{cart_items_nbr}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header