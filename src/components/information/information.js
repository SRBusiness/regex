import React from 'react';
import styles from './information.css';

// Functional stateless component
const Information = () => {
  return (
    <div className={styles.centeredContainer}>
      <p><a href="https://twitter.com/sreadbrown">TWITTER</a> •  <a href="https://github.com/SRBusiness">GITHUB</a> • <a href="https://www.adadevelopersacademy.org/">Ada Developers Academy</a></p>

    </div>
  )
}

export default Information;
