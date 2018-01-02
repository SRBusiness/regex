import React from 'react';
import PropTypes from 'prop-types';
// this will need to have state and need to know what level we are on so it can pass that information to the lesson component

function Lesson({lesson}) {
  return(
    <div className='lesson-zone'>
      <h3>{lesson.title}</h3>
      <ul className='lesson-list'>
        <li>{lesson.content}</li>
        <li>{lesson.example}</li>
      </ul>
    </div>
  )
}

Lesson.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
  }).isRequired
}

// state will need the level

class LessonContainer extends React.Component {


  render() {
    let levellessons = {
      0: {
        title: 'Intro to regex',
        content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content',
        example: "I'm and example /regex/ matches some thing in a string! how cool"
      },
      1: {
        title: "More regex",
        content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content',
        example: "I'm and a second example /regex/ matches some thing in a string! how cool"
      }
    }

    return (
      <Lesson lesson={levellessons[0]}/>
    )
  }
}


export default LessonContainer
