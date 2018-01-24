import React from 'react';
import PropTypes from 'prop-types';
import styles from './otterFact.css';
import otterVector from './otterhead1.png';

// Functional stateless component
const OtterFact = ({fact}) => {
  return (
    <div className={styles.otterFactContainer}>
      <div>
        <img src={otterVector} alt="Otter" /><p><span className={styles.fact}><b>Otter Fact:</b></span> {fact} </p>
      </div>
    </div>
  )
}

OtterFact.propTypes = {
  fact: PropTypes.string.isRequired,
}
export default OtterFact;
