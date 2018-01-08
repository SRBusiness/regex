import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instructions extends Component {
  render() {
    const { title, number, content, example } = this.props.instructions;
    return(
      <div className='lesson-zone'>
        <h3>Lesson # {number} - {title}</h3>
        <ul className='lesson-list'>
          <li>{content}</li>
          <li>{example}</li>
        </ul>
      </div>
    )
  }
}

Instructions.propTypes = {
  instructions: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

export default Instructions;
