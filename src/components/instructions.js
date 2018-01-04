import React, { Component } from 'react';
import PropTypes from 'prop-types';
// this will need to have state and need to know what level we are on so it can pass that information to the lesson component

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

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

// TODO: updates proptypes
Instructions.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

// state will need the level

// class LessonContainer extends React.Component {
//
//
//   render() {
//     let levellessons = {
//       0: {
//         title: 'Intro to regex',
//         content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content',
//         example: "I'm and example /regex/ matches some thing in a string! how cool"
//       },
//       1: {
//         title: "More regex",
//         content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content',
//         example: "I'm and a second example /regex/ matches some thing in a string! how cool"
//       }
//     }
//
//     return (
//       <Lesson lesson={levellessons[0]}/>
//     )
//   }
// }


export default Instructions;
