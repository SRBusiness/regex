import styles from './reducer.css'

const initialState = {
  currentLevelIndex: 0,
  levels: [
    {
      puzzles: [
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
      ],
      instructions: {
        title: 'Intro to regex',
        number: 1,
        content: [
          [
            {
              text: 'Regular expressions are made up of two different types of characters. Normal text characters like the letter “a”  or the number  “1” are called ',
            }, {
              text: 'literals',
              type: 'BOLD',
            }, {
              text: ', while special characters are called ',
            }, {
              text: 'metacharacters',
              type: 'BOLD',
            }, {
              text: '. Don’t worry about metacharacters for now, we will go over them slowly as we progress.',
            }
          ], [
            {
              text: 'For example the regex ',
            }, {
              text: '/art/',
              type: 'REGEX',
            }, {
              text: ' will look for the first time the letters a-r-t appear in a row. This could match the “'
            }, {
              text: 'art',
              type: 'UNDERLINE'
            }, {
              text: '”, “st'
            }, {
              text: 'art',
              type: 'UNDERLINE'
            }, {
              text: 'ing”, or “',
            }, {
              text: 'art',
              type: 'UNDERLINE'
            }, {
              text: 'isan” but would not match “Artifact” because regex’s, by default, are case sensitive unless you tell them to act otherwise with a flag.',
            },
          ], [
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
        ],
      },
    },
    {
      puzzles: [
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
      ],
      instructions: {
        title: `More regex`,
        number: 2,
        content: [
          [
            {
              text: 'Now that we know how to use literals to search for literal pieces of text let’s get into the really powerful part of regex using metacharacters. There are over a dozen metacharacters, such as ',
            }, {
              text: '| (pipe)',
              type: 'META',
            }, {
              text: ', ',
            }, {
              text: ' [ ] (square brackets)',
              type: 'META'
            }, {
              text: ',  or a ',
            }, {
              text: '+ (plus)',
              type: 'META',
            }, {
              text: ', all of which have a special meaning for building patterns. To start we are going to focus on the ',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: ' also known as a point, period, or wildcard.',
            },
          ], [
            {
              text: 'In most cards games a wildcard is a playing card that substitutes for any other card in card the game. In regex the',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: ' takes a similar meaning and can take the form of any single character (letter, digit, whitespace, everything) except a line break. For example the regex ',
            }, {
              text: '/paw./',
              type: 'REGEX',
            }, {
              text: ' will match the text paw followed by any single character.',
            },
          ], [
            {
              text: 'INSERT IMAGE HERE!',
            },
          ], [
            {
              text: 'An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the  ',
            }, {
              text: '\ (backslash)',
              type: 'META',
            }, {
              text: ' character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would /romp\./ which would match “romp.”  If we forgot the backslash ',
            }, {
              text: '/romp./',
              type: 'REGEX',
            }, {
              text: ' the ',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: ' would still have its special meaning and would match the text “romp” plus any character.',
            },
          ], [
            {
              text: 'INSERT REGEX IMAGE HERE!',
            },
          ], [
            {
              text: 'INSERT REGEX IMAGE HERE!',
            },
          ],
        ],
      }
    },
    {
      puzzles: [
        {
          text: 'WILLIAM WORTHLESS Mar 2014\notter friend\ni saw a little otter swimming in a brook\ni got a little closer so i could take a look\nhe was having fun chasing all the fish\nfor the little otter this was his favorite dish\nhe was very friendly and wanted me to play\nso i played with him to pass the time away\nhe was very happy he had company \nhe had found a friend and that friend was me\nthen he swam away in to his otter hole\nhe was getting tired poor little soul\ni waved and said goodbye and let him go to sleep\nin his otter home so very long and deep',
          prompt: 'Build a regex to match both of the words dish and fish using the character class [ ] (square brackets ).',
          answer: '[fd]ish',
        }, {
          text: 'WILLIAM WORTHLESS Mar 2014\notter friend\ni saw a little otter swimming in a brook\ni got a little closer so i could take a look\nhe was having fun chasing all the fish\nfor the little otter this was his favorite dish\nhe was very friendly and wanted me to play\nso i played with him to pass the time away\nhe was very happy he had company \nhe had found a friend and that friend was me\nthen he swam away in to his otter hole\nhe was getting tired poor little soul\ni waved and said goodbye and let him go to sleep\nin his otter home so very long and deep',
          prompt: 'Build a regex to match both of the words deep and sleep using the character class [ ] (square brackets )',
          answer: '[dsl]+eep',
        }
      ],
      instructions: {
        title: `Matching specific characters`,
        number: 3,
        content: [
          [
            {
              text: 'We know we can use the ',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: '  when we want match any character (digit, number, whitespace) but if you want to be more specific in our patterns you should use a character class which is defined by the ',
            }, {
              text: '[ ] (square brackets)',
              type: 'META',
            }, {
              text: ' metacharacters.',
              type: 'BOLD',
            },
          ], [
            {
              text: 'A character class allows you to tell the regex to match only one character from a list of possible characters. Just place the characters that are possible matches inside the square brackets. Anything inside the square brackets should be treated like it has an implied “or” between them. For example the regex ',
            }, {
              text: '/[oO]tter/',
              type: 'REGEX',
            }, {
              text: ' will match both “Otter” and  “otter”. Characters classes allow you to be more flexible are are great for searching for words that are occasionally capitalized or commonly misspelled. ',
            },
          ], [
            {
              text: 'INSERT REGEX IMAGE HERE!',
            },
          ], [
            {
              text: 'Metacharacters',
              type: 'BOLD',
            }, {
              text: ', like the ',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: ', lose their special meaning and become literal character when they appear inside a character class. The two exceptions are the ',
            }, {
              text: '^ (caret)',
              type: 'META',
            }, {
              text: ' and the ',
            }, {
              text: '- (dash)',
              type: 'META',
            }, {
              text: 'which gain a new meanings inside of a character class - we will cover this shortly.',
            }
          ]
        ],
      },
    },
    {
      puzzles: [
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
      ],
      instructions: {
        title: `Matching specific characters`,
        number: 4,
        content: [
          [
            {
              text: 'When you are building regex patterns you will often run into situations where you need to match a repeated character. Multipliers such as the ',
            }, {
              text: '+ (plus)',
              type: 'META',
            }, {
              text: ' and the '
            }, {
              text: '* (asterix)',
              type: 'META',
            }, {
              text: ' give us the ability to arbitrarily increase the number of times a character is matched. The '
            }, {
              text: '+ (plus)',
              type: 'META',
            }, {
              text: ' metacharacter',
              type: 'BOLD'
            }, {
              text: ' indicates '
            }, {
              text: 'one or more',
              type: 'ITALIC',
            }, {
              text: ' instances of the same character while the ',
            }, {
              text: '* (asterix)',
              type: 'META',
            }, {
              text: ' indicates ',
            }, {
              text: 'zero or more ',
              type: 'ITALIC',
            }, {
              text: ' instances of the same character. Both the ',
            }, {
              text: '+ (plus)',
              type: 'META',
            }, {
              text: ' and the '
            }, {
              text: '* (asterix)',
              type: 'META',
            }, {
              text: ' should always follow the token or item it applies to.',
            }, {
              text: 'For example the regex ',
            }, {
              text: '/ot+ers*/',
              type: 'REGEX',
            }, {
              text: ' would match “oter”, “otters”, and “otttttterssss”  but would NOT match “oers”.'
            }
          ], [
            {
              text: 'INSERT REGEX IMAGE HERE!',
            },
          ], [
            {
              text: 'Like with the ',
            }, {
              text: '. (dot)',
              type: 'META',
            }, {
              text: ' in the prior level if we want to use the ',
            }, {
              text: '+ (plus)',
              type: 'META',
            }, {
              text: 'or the '
            }, {
              text: '* (asterix)',
              type: 'META',
            }, {
              text: ' as a literal character we need to escape them with a ',
            }, {
              text: ' \ (backslash)',
            }, {
              text: '.',
            },
          ], [
            {
              text: 'Fun otter fact',
              type: 'BOLD',
            }, {
              text: ' - Did you know that there are 13 distinct species of otter and 3 that have the word claw in their name including the African Clawless Otter, the Asian Small-Clawed Otter, and the Congo Clawless Otter.',
            },
          ]
        ],
      }
    },{
      puzzles: [
        {
          text: '\nCho C. Chang\nSeamus O. Finnigan\nHermione J. Granger\nViktor N. Krum\nFlipper	I. Longbottom\nLuna L. Lovegood\nUrchin S. Malfoy\nBarry G. pOtter\nDanny	D. pOtter\nGarny	B. pOtter\nHarry J. pOtter\nJerry A. pOtter\nMarry	P. pOtter\nPerny	B. pOtter\nTimmy	P. pOtter\nBon T. Weasley\nDon P. Weasley\nRon L. Weasley',
          prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex to match the first name of all the weasley brothers except Don.' ,
          answer: '[^D]on',
        }, {
          text: '\nCho C. Chang\nSeamus O. Finnigan\nHermione J. Granger\nViktor N. Krum\nFlipper	I. Longbottom\nLuna L. Lovegood\nUrchin S. Malfoy\nBarry G. pOtter\nDanny	D. pOtter\nGarny	B. pOtter\nHarry J. pOtter\nJerry A. pOtter\nMarry	P. pOtter\nPerny	B. pOtter\nTimmy	P. pOtter\nBon T. Weasley\nDon P. Weasley\nRon L. Weasley',
          prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex pattern, using the ^ (caret), that selects the full name of all the members of the Otter family except Berry and Larry.',
          answer: '[^BLJ][eai].+pOtter',
        },
      ],
      instructions: {
        title: `Matching specific characters`,
        number: 5,
        content: [
          [
            {
              text: 'Sometimes you want to exclude a character or a group of characters from you regex. You can use the ',
            }, {
              text: '^ (caret)',
              type: 'META',
            }, {
              text: ' inside a character class after the opening square bracket to negate anything that follows it in the character class. This will mean that the character class will match a any single character that is '
            }, {
              text: 'NOT',
              type: 'BOLD',
            }, {
              text: ' listed in the character class. Using the '
            }, {
              text: '^ (caret)',
              type: 'META',
            }, {
              text: ' at the beginning of your character class transforms it from a list of characters you do want to match into a list a characters you don’t want to match. The regex ',
            }, {
              text: '/p[^a]./',
              regex: 'REGEX',
            }, {
              text: ' will match the text “pup” and “pet”. The previous regex very literally means a “p” followed by a character that is not an “a” followed by any character.',
            },
          ], [
            {
              text: 'INSERT REGEX IMAGE HERE!',
            },
          ], [
            {
              text: 'Outside of a character class the ',
            }, {
              text: '^ (caret)',
              type: 'META',
            }, {
              text: ' is a '
            }, {
              text: 'metacharacter',
              types: 'BOLD',
            }, {
              text: ' and has a different meaning that we will cover in future levels. For now it is important to know that inside a character class the'
            }, {
              text: '^ (caret)',
              type: 'META',
            }, {
              text: ' is a ',
            }, {
              text: 'metacharacter',
              types: 'BOLD',
            }, {
              text: ' only when it directly follows the opening square bracket like in this ',
            }, {
              text: '/[^o]/',
              type: 'REGEX',
            }, {
              text: '. In all other cases inside a character class it is treated as a ',
            }, {
              text: 'literal',
              type: 'BOLD',
            }, {
              text: ' character thile in this regex ',
            }, {
              text: '/[ab^]/',
              type: 'REGEX',
            }, {
              text: '.',
            },
          ],
        ],
      }
    }
  ],
  globalFlag: true,
  refSheetContent: [
    // [
      ["g",	"global search flag"],
      [".",	"any single character"],
      ["[paw]",	"a single character of: p, a, or w"],
      ["[^paw]", "any single character except: p, a, or w"],
      ["[a-z]",	"any single character in the range a-z"],
      ["[a-zA-Z]", "any single character in the range a-z or A-Z"],
      ["\d", "any digit"],
      ["\D", "any non-digit"],
      ["\w", "any word character (letter, number, underscore)"],
    // ],
    // [
      ["\W", "any non-word character"],
      ["o{3}", "exactly 3 of "],
      ["t{3,}",	"3 or more of t"],
      ["t{3,6}", "between 3 and 6 of t"],
      ["e?", "zero or one of e"],
      ["r*", "zero or more of e"],
      ["s+", "one or more of s"],
      ["(o|t)",	"o or t"],
    // ],
    // [
      ["^",	"start of line"],
      ["$",	"end of line"],
      ["\A", "start of string"],
      ["\z", "end of string"],
      ["\s", "any whitespace character"],
      ["\S", "any non-whitespace character"],
      ["\\b", "any word boundary"],
      ["(...)",	"capture everything enclosed"],
    // ],
  ],
  toggleRefSheet: false,
  currentExerciseIndex: 1,
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
    case 'TOGGLE_GLOBAL_FLAG' :
      return {
        ...state,
        globalFlag: !state.globalFlag,
      }
    default :
      return state
  }
}
