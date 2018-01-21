// const tokens = [{
//   text: 'Text before a ',
//   type: PLAIN
// }, {
//   text: 'bold thing',
//   type: BOLD
// }, {
//   text: ' and then some more text leading up to a '
//   // You can leave off the type: PLAIN
// }, {
//   text: 'different thing',
//   type: ITALIC
// }, {
//   text: '. Then maybe an '
// }, {
//   text: 'underlined thing',
//   type: UNDERLINE
// }, {
//   text: '. The possibilities are '
// }, {
//   text: 'Endless!',
//   type: SPECIAL
// }]

const LessonLvl1 = [
  [
    {
      text: 'Regular expressions are made up of two different types of characters. Normal text characters like the letter “a”  or the number  “1” are called ',
    }, {
      text: 'literals',
      type: BOLD
    }, {
      text: ', while special characters are called '
    }, {
      text: 'metacharacters',
      type: BOLD
    }, {
      text: '. Don’t worry about metacharacters for now, we will go over them slowly as we progress.'
    }
  ],
  [
    {
      text: 'For example the regex ',
    }, {
      text: '/art/',
      type: REGEX
    }, {
      text: ' will look for the first time the letters a-r-t appear in a row. This could match the “'
    }, {
      text: 'art',
      type: UNDERLINE
    }, {
      text: '”, “st'
    }, {
      text: 'art',
      type: UNDERLINE
    }, {
      text: 'ing”, or “',
    }, {
      text: 'art',
      type: UNDERLINE
    }, {
      text: 'isan” but would not match “Artifact” because regex’s, by default, are case sensitive unless you tell them to act otherwise with a flag.',
    },
  ],
  [
    {
      text: 'Speaking of flags there is one flag worth introducing now. The default behavior for a regular expression is that it will look through the text, character by character, and stop once it finds the first occurance of a match. When we want to search for all possible matches not just the first we will add the ',
    }, {
      text: 'g (global search)',
      type: 'META'
    }, {
      text: ', flag to the end of our regex that indicates that the regular expression should be tested against all possible matches in a string. You can use the slider button to toggle the '
    }, {
      text: 'g (global search)',
      type: 'META'
    }, {
      text: ' flag on an off.'
    },
  ]
]

const LessonLvl2 = [
  [
    {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }
  ],
  [
    {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }
  ],
]

const LessonLvlX = [
  [
    {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }
  ],
  [
    {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: ''
    }, {
      text: '',
    }, {
      text: '',
    }, {
      text: ''
    }
  ],
]



const PuzzleLvl1 = [
  {
    text: 'Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.',
    prompt: 'Build a regex pattern using literal characters that matches the text "fur"',
    answer: 'fur',
  }, {
    text: 'Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.',
    prompt: 'Build a regex pattern using literal characters that matches the text "coat"',
    answer: 'coat',
  }, {
    text: 'Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.',
    prompt: 'Build a regex pattern using literal characters that matches the text "250,000"',
    answer: '250,000',
  }
]

const PuzzleLvl2 = [
  {
    text: 'ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER\no773R-WA-SEA-M-!34\no773R-WA-PDA-M-br5\no773R-WA-SEA-F--{k\no773R-WA-SEA-F-:)a\no773R-OR-SSA-F-r4f\no773R-OR-OCA-M-c1%\no773R-CA-SFZ-F-d0g\no773R-CA-MBA-F-13g\no773R-CA-MBA-M-0kj\n5Qw1d-CA-SFZ-F-.-1\n5Qw1d-OR-OCA-F-\\31\n5Qw1d-WA-SEA-M-!3f\n5Qw1d-WA-PDA-F-o9!\n5Qw1d-WA-SEA-F-d3w\n5Qw1d-WA-PDA-M-abc',
    prompt: 'You are a marine mammal researcher and often looking through the National Standard Zoo and Aquarium (NSZA) database to find information. From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all female (F), Otters (o773R), in the state of California (CA), from the Monterey Bay Aquarium (MBA).' ,
    answer: 'o773R.CA.MBA.F....',
  }, {
    text: 'ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER\no773R-WA-SEA-M-!34\no773R-WA-PDA-M-br5\no773R-WA-SEA-F--{k\no773R-WA-SEA-F-:)a\no773R-OR-SSA-F-r4f\no773R-OR-OCA-M-c1%\no773R-CA-SFZ-F-d0g\no773R-CA-MBA-F-13g\no773R-CA-MBA-M-0kj\n5Qw1d-CA-SFZ-F-.-1\n5Qw1d-OR-OCA-F-\\31\n5Qw1d-WA-SEA-M-!3f\n5Qw1d-WA-PDA-F-o9!\n5Qw1d-WA-SEA-F-d3w\n5Qw1d-WA-PDA-M-abc',
    prompt: 'You are a marine mammal researcher and often looking through the National Standard Zoo and Aquarium (NSZA) database to find information. From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all female (F) animals in the state of Washington (WA).',
    answer: '......WA-...-F....',
  }, {
    text: 'ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER\no773R-WA-SEA-M-!34\no773R-WA-PDA-M-br5\no773R-WA-SEA-F--{k\no773R-WA-SEA-F-:)a\no773R-OR-SSA-F-r4f\no773R-OR-OCA-M-c1%\no773R-CA-SFZ-F-d0g\no773R-CA-MBA-F-13g\no773R-CA-MBA-M-0kj\n5Qw1d-CA-SFZ-F-.-1\n5Qw1d-OR-OCA-F-\\31\n5Qw1d-WA-SEA-M-!3f\n5Qw1d-WA-PDA-F-o9!\n5Qw1d-WA-SEA-F-d3w\n5Qw1d-WA-PDA-M-abc',
    prompt: 'You are a marine mammal researcher and often looking through the National Standard Zoo and Aquarium (NSZA) database to find information. From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all Otters (o773R).' ,
    answer: 'o773R.............',
  }
]

const PuzzleLvl3 = [
  {
    text: 'WILLIAM WORTHLESS Mar 2014\notter friend\ni saw a little otter swimming in a brook\ni got a little closer so i could take a look\nhe was having fun chasing all the fish\nfor the little otter this was his favorite dish\nhe was very friendly and wanted me to play\nso i played with him to pass the time away\nhe was very happy he had company \nhe had found a friend and that friend was me\nthen he swam away in to his otter hole\nhe was getting tired poor little soul\ni waved and said goodbye and let him go to sleep\nin his otter home so very long and deep',
    prompt: 'Build a regex to match both of the words dish and fish using the character class [ ] (square brackets ).',
    answer: '[fd]ish',
  }, {
    text: 'WILLIAM WORTHLESS Mar 2014\notter friend\ni saw a little otter swimming in a brook\ni got a little closer so i could take a look\nhe was having fun chasing all the fish\nfor the little otter this was his favorite dish\nhe was very friendly and wanted me to play\nso i played with him to pass the time away\nhe was very happy he had company \nhe had found a friend and that friend was me\nthen he swam away in to his otter hole\nhe was getting tired poor little soul\ni waved and said goodbye and let him go to sleep\nin his otter home so very long and deep',
    prompt: 'Build a regex to match both of the words deep and sleep using the character class [ ] (square brackets )',
    answer: '[dsl]+eep',
  }
]

const PuzzleLvl4 = [
  {
    text: 'Claaaaaaaawwwwww\nClawwwwwww\nClaaaaaaw\nClaw\nCla\nCaw',
    prompt: 'Build a regex pattern that matches the first four lines of clawish code but not the last two using the + (plus) and the * (asterix)',
    answer: 'Cla*w+',
  }, {
    text: '\nClawwwwwwless-Otter\nClwing-Otter\nClawwwwwwwd-Otter\nClawing-Otterzzzz\nClaww-Otter\nClaw-Oterz\nCaw-Otterz\nClang-Otter',
    prompt: 'Build a regex pattern that matches the first five lines of claw-ish-otter-ish text but not the last three using the + (plus),* (asterix) , and . (dot)',
    answer: 'Cla*w.+Otterz*',
  }, {
    text: '\nClawwwwwwless-Otter\nClwing-Otter\nClawwwwwwwd-Otter\nClawing-Otterzzzz\nClaww-Otter\nClaw-Oterz\nCaw-Otterz\nClang-Otter',
    prompt: 'Build a regex pattern that matches everything.' ,
    answer: '.+',
  }
]

const PuzzleLvl5 = [
  {
    text: '\nCho C. Chang\nSeamus O. Finnigan\nHermione J. Granger\nViktor N. Krum\nFlipper	I. Longbottom\nLuna L. Lovegood\nUrchin S. Malfoy\nBarry G. pOtter\nDanny	D. pOtter\nGarny	B. pOtter\nHarry J. pOtter\nJerry A. pOtter\nMarry	P. pOtter\nPerny	B. pOtter\nTimmy	P. pOtter\nBon T. Weasley\nDon P. Weasley\nRon L. Weasley',
    prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex to match the first name of all the weasley brothers except Don.' ,
    answer: '[^D]on',
  }, {
    text: '\nCho C. Chang\nSeamus O. Finnigan\nHermione J. Granger\nViktor N. Krum\nFlipper	I. Longbottom\nLuna L. Lovegood\nUrchin S. Malfoy\nBarry G. pOtter\nDanny	D. pOtter\nGarny	B. pOtter\nHarry J. pOtter\nJerry A. pOtter\nMarry	P. pOtter\nPerny	B. pOtter\nTimmy	P. pOtter\nBon T. Weasley\nDon P. Weasley\nRon L. Weasley',
    prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex pattern, using the ^ (caret), that selects the full name of all the members of the Otter family except Berry and Larry.',
    answer: '[^BLJ][eai].+pOtter',
  },
]

const PuzzleLvlx = [
  {
    text: ,
    prompt:  ,
    answer: ,
  }, {
    text: ,
    prompt:  ,
    answer: ,
  }, {
    text: ,
    prompt:  ,
    answer: ,
  },
]
