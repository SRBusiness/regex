import React from 'react';
import PropTypes from 'prop-types';
import styles from './instructions.css'

// Functional stateless component
const Instructions = (props) => {
  const { title, number, content, example } = props.instructions;
  return(
    <div className={styles.instructionsContainer }>
      <h3>Level # {number} - {title}</h3>
      <p>{content}</p>
      <p>{example}</p>
    </div>
  )
}

Instructions.propTypes = {
  instructions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

export default Instructions;
