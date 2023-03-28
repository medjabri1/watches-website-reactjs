import React from 'react'
import { Link } from 'react-router-dom'

import styles from './ShowcaseItem.module.css';

function ShowcaseItem({item}) {
  return (
    <div className={styles.ShowcaseItem__container}>
        <div className={styles.ShowcaseItem__info__container}>
          <div className={styles.ShowcaseItem__info}>
            <h1 className={styles.ShowcaseItem__model}>Submariner</h1>
            <h3 className={styles.ShowcaseItem__brand}>Rolex</h3>
            <span className={styles.ShowcaseItem__price}>2300$</span>
            <Link className={styles.ShowcaseItem__details} to="/">Details</Link>
          </div>
        </div>
        <div className={styles.ShowcaseItem__img}>
            <img 
                src={item.img} alt="Image" />
        </div>
    </div>
  )
}

export default ShowcaseItem