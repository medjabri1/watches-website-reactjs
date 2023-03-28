import React from 'react'

import Showcase from './components/Showcase/Showcase';
import Facility from './components/Facility/Facility';

import styles from './Landing.module.css';
import Footer from '../Footer/Footer';
import Testimonial from './components/Testimonial/Testimonial';
import Newsletter from './components/Newsletter/Newsletter';

function Landing() {
	return (
		<div className={styles.landing__container}>
			<Showcase />
			<Testimonial />
			<Facility />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default Landing