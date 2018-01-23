import React from 'react';
import PropTypes from 'prop-types';
import styles from './otterFact.css';

// Functional stateless component
const OtterFact = ({fact}) => {
  return (
    <div className={styles.container}>
      <p><span className={styles.fact}>Otter Fact:</span> {fact} </p>
    </div>
  )
}

OtterFact.propTypes = {
  fact: PropTypes.string.isRequired,
}
export default OtterFact;
