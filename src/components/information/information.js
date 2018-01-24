import React from 'react';
import styles from './information.css';

// Functional stateless component
const Information = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centeredContainer}>
        <p><a href="https://twitter.com/sreadbrown">TWITTER</a> • <a href="https://github.com/SRBusiness">GITHUB</a> • <a href="https://www.adadevelopersacademy.org/">ADA DEVELOPERS ACADEMY</a></p>
      </div>
      <div className={styles.centeredContainer}>
        <p>&#169; 2018 SRBusiness</p>
      </div>
      <div className={styles.centeredContainer}>
        <p>Adorable icons by <a href="https://thenounproject.com/habione.404/">habione 404</a> and <a href="https://www.flaticon.com/free-icon/otter_394786#term=otter&page=1&position=13">Freepik</a></p>
      </div>
    </div>
  )
}

export default Information;
