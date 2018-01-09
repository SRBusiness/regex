const initialState = {
  currentLevelIndex: 0,
  levels: [
    {
      puzzle: {
        text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into food. While they hunt for food underwater they’ll often store a rock in the skin under their arms for later use.`,
        prompt: `Build a Regex that matches the word "rock"`,
        answer: `rock`,
        hints: `I'm a hint!`,
        solution: `I'm a solution regexp(/winner/)`,
        title: `Intro to RegExp`,
        number: 1,
      },
      instructions: {
        title: 'Intro to regex',
        number: 1,
        content: `Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 `,
        example: `I'm and example /regex/ matches some thing in a string! how cool`,
      },
    },
    {
      puzzle: {
        text: `There are 13 species of Otters, and just about all of them are decreasing.`,
        prompt: `Build a Regex that matches the number "13"`,
        answer: `13`,
        hints: `I'm a hint!`,
        solution: `I'm a solution regexp(/winner/)`,
        title: `More regex`,
        number: 2,
      },
      instructions: {
        title: `More regex`,
        number: 2,
        content: `Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 `,
        example: `I'm and example /regex/ matches some thing in a string! how cool`,
      }
    },
    {
      puzzle: {
        text: `Otters sometimes sleep above ground in a ‘couch’ (den). However they predominantly reside in underground ‘holts’. These are chambers dug out of the river bank or cavities under riverside tree roots. They also have their young in the holts.`,
        prompt: `Build a Regex that matches "river"`,
        answer: `riverside`,
        hints: `I'm a hint!`,
        solution: `I'm a solution regexp(/winner/)`,
        title: `Matching specific characters`,
        number: 3,
      },
      instructions: {
        title: `Matching specific characters`,
        number: 3,
        content: `Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 `,
        example: `I'm and example /regex/ matches some thing in a string! how cool`,
      }
    },
    {
      puzzle: {
        text: `tom@hogwarts.com tom.riddle@homwarts.edu	tom.riddle+regexone@hogwarts.com 	tom@hobwarts.eu.cup 	potter@hoswart.gov harry@hohwart.cat hermione+regexone@hogwarts.com`,
        prompt: `test`,
        answer: `riverside`,
        hints: `I'm a hint!`,
        solution: `I'm a solution regexp(/winner/)`,
        title: `Matching specific characters`,
        number: 4,
      },
      instructions: {
        title: `Matching specific characters`,
        number: 4,
        content: `Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 Content Level 3 `,
        example: `I'm and example /regex/ matches some thing in a string! how cool`,
      }
    }
  ]
  // view: '',
}

// reducer for changing levels
export default function rootReducer (state = initialState, action) {
  // console.log(`inside levelsReducer`);
  switch (action.type) {
    case 'INCREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.min( state.currentLevelIndex + 1, state.levels.length - 1)
      }
    case 'DECREMENT_LEVEL' :
      return {
        ...state,
        currentLevelIndex: Math.max(state.currentLevelIndex - 1, 0)
      }
    case 'CHANGE_LEVEL' :
      return {
        ...state,
        currentLevelIndex: (action.level - 1),
      }
    default :
      return state
  }
}
