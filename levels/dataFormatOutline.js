const levelsStructure = {
  0: {
    puzzle: {
      text: `string`,
      prompt: `string`,
      answer: `string or JS RegExp Object`,
      hints: `I'm a hint!`,
      solution: `I'm a solution regexp(/winner/)`,
      title: `Title!`,
      number: 1,
    },
    instructions: {
      title: `Title!`,
      number: 1,
      content: `Content Level # `,
      example: `I'm and example /regex/ matches some thing in a string! how cool`
    }
  },
  1: {
    puzzle: {
      text: ``,
      prompt: ``,
      answer: ``,
      hints: ``,
      solution: ``,
      title: ``,
      number: 1,
    },
    instructions: {
      title: ``,
      number: 1,
      content: ``,
      example: ``
    }
  }
}

const levels = {
  0: {
    puzzle: {
      text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.`,
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
    }
  },
  1: {
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
}


const puzzles = {
  0:{
    text: `Otters love to eat shelled animals, like clams, but otters aren’t equipped with the strength to open their food without some help. Otters are big on tools, and will often use rocks to help crack into dinner. While they hunt for food underwater, they’ll often store a rock in the skin under their arms for later use.`,
    prompt: 'Build a Regex that matches the word "rock"',
    answer: 'rock',
  },
  1: {
    text: `There are 13 species of Otters, and just about all of them are decreasing.`,
    prompt: `Build a Regex that matches the number "13"`,
    answer: `13`,
  },
  2:{
    text: 'file_record_transcript.pdf',
    prompt: 'prompt',
    answer: 'answer'
  }
}

let levellessons = {
  0: {
    title: 'Intro to regex',
    content: `Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 Content Level 1 `,
    example: `I'm and example /regex/ matches some thing in a string! how cool`
  },
  1: {
    title: `More regex`,
    content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content',
    example: "I'm and a second example /regex/ matches some thing in a string! how cool"
  }
}

const levels = [
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
  }
]
