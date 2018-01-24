const initialState = {
  levels: [
    {
      fact: "Otters are known to be quite chatty creatures. In fact, a large group of otters can create quite a chaotic sounding noise. However, despite the cacophony, otters seem to be able to discern the sounds made by the otters with which they identify. These sounds can take the form of squeaks, growls, grunts and chirps.",
      puzzles: [
        {
          text: ['Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.'],
          prompt: 'Build a regex pattern using literal characters that matches the text "fur"',
          answer: 'fur',
        }, {
          text: ['Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.'],
          prompt: 'Build a regex pattern using literal characters that matches the text "coat"',
          answer: 'coat',
        }, {
          text: ['Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs.Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.'],
          prompt: 'Build a regex pattern using literal characters that matches the text "250,000"',
          answer: '250,000',
        }
      ],
      instructions: {
        title: 'Literal Characters',
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
      fact: 'Otters can be found on almost every continent, with Australia and Antarctica being the only two exceptions. Most otters are found near freshwater, although they are also known to enjoy the oceans’ saltwater. Otters tend to prefer cooler waters, but they can be found on sandy landscapes near warmer waters.',
      puzzles: [
        {
          text:[
          `ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER`,
          `o773R-WA-SEA-M-!34`,
          `o773R-WA-PDA-M-br5`,
          `o773R-WA-SEA-F--{k`,
          `o773R-WA-SEA-F-:)a`,
          `o773R-OR-SSA-F-r4f`,
          `o773R-OR-OCA-M-c1%`,
          `o773R-CA-SFZ-F-d0g`,
          `o773R-CA-MBA-F-13g`,
          'o773R-CA-MBA-F-srb',
          `o773R-CA-MBA-M-0kj`,
          `5Qw1d-CA-SFZ-F-.-1`,
          `5Qw1d-OR-OCA-F-\\31`,
          `5Qw1d-WA-SEA-M-!3f`,
          `5Qw1d-WA-PDA-F-o9!`,
          `5Qw1d-WA-SEA-F-d3w`,
          `5Qw1d-WA-PDA-M-abc`],
          prompt: 'You are a marine mammal researcher and often looking through the National Standard Zoo and Aquarium (NSZA) database to find information. From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all female (F), Otters (o773R), in the state of California (CA), from the Monterey Bay Aquarium (MBA).' ,
          answer: 'o773R.CA.MBA.F....',
        }, {
          text: [
          `ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER`,
          `o773R-WA-SEA-M-!34`,
          `o773R-WA-PDA-M-br5`,
          `o773R-WA-SEA-F--{k`,
          `o773R-WA-SEA-F-:)a`,
          `o773R-OR-SSA-F-r4f`,
          `o773R-OR-OCA-M-c1%`,
          `o773R-CA-SFZ-F-d0g`,
          `o773R-CA-MBA-F-13g`,
          'o773R-CA-MBA-F-srb',
          `o773R-CA-MBA-M-0kj`,
          `5Qw1d-CA-SFZ-F-.-1`,
          `5Qw1d-OR-OCA-F-\\31`,
          `5Qw1d-WA-SEA-M-!3f`,
          `5Qw1d-WA-PDA-F-o9!`,
          `5Qw1d-WA-SEA-F-d3w`,
          `5Qw1d-WA-PDA-M-abc`],
          prompt: 'From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all female (F) animals in the state of Washington (WA).',
          answer: '......WA-...-F....',
        }, {
          text:[
          `ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER`,
          `o773R-WA-SEA-M-!34`,
          `o773R-WA-PDA-M-br5`,
          `o773R-WA-SEA-F--{k`,
          `o773R-WA-SEA-F-:)a`,
          `o773R-OR-SSA-F-r4f`,
          `o773R-OR-OCA-M-c1%`,
          `o773R-CA-SFZ-F-d0g`,
          `o773R-CA-MBA-F-13g`,
          'o773R-CA-MBA-F-srb',
          `o773R-CA-MBA-M-0kj`,
          `5Qw1d-CA-SFZ-F-.-1`,
          `5Qw1d-OR-OCA-F-\\31`,
          `5Qw1d-WA-SEA-M-!3f`,
          `5Qw1d-WA-PDA-F-o9!`,
          `5Qw1d-WA-SEA-F-d3w`,
          `5Qw1d-WA-PDA-M-abc`],
          prompt: 'From the snippet of NSZA codes provided build a regex pattern that matches the entire NSZA code for all Otters (o773R).' ,
          answer: 'o773R.............',
        }
      ],
      instructions: {
        title: `The Regex . (dot)`,
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
              text: 'In most cards games a wildcard is a playing card that substitutes for any other card in card the game. In regex the ',
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
      fact: 'Otters spend time both in water and on land, and their bodies are uniquely designed for this. They are able to move easily in both environments. Otters have four strong webbed feet, each with with sharp claws. These feet enable them to move with strength, stability and speed both in the water and on land.',
      puzzles: [
        {
          text: [
            'WILLIAM WORTHLESS Mar 2014 - otter friend',
            'i saw a little otter swimming in a brook',
            'i got a little closer so i could take a look',
            'he was having fun chasing all the fish',
            'for the little otter this was his favorite dish',
            'he was very friendly and wanted me to play',
            'so i played with him to pass the time away',
            'he was very happy he had company',
            'he had found a friend and that friend was me',
            'then he swam away in to his otter hole',
            'he was getting tired poor little soul',
            'i waved and said goodbye and let him go to sleep',
            'in his otter home so very long and deep',
          ],
          prompt: 'Build a regex to match both of the words dish and fish using the character class [ ] (square brackets ).',
          answer: '[fd]ish',
        }, {
          text: [
            'WILLIAM WORTHLESS Mar 2014 - otter friend',
            'i saw a little otter swimming in a brook',
            'i got a little closer so i could take a look',
            'he was having fun chasing all the fish',
            'for the little otter this was his favorite dish',
            'he was very friendly and wanted me to play',
            'so i played with him to pass the time away',
            'he was very happy he had company',
            'he had found a friend and that friend was me',
            'then he swam away in to his otter hole',
            'he was getting tired poor little soul',
            'i waved and said goodbye and let him go to sleep',
            'in his otter home so very long and deep',
          ],
          prompt: 'Build a regex to match both of the words deep and sleep using the character class [ ] (square brackets )',
          answer: '[dsl]+eep',
        }
      ],
      instructions: {
        title: `Chararacter Classes [ ] (square brackets)`,
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
      fact: 'Otters can hold their breath and remain under water for up to 4 minutes. In addition, otters are known to dive as deep as 300 feet when hunting for food.',
      puzzles: [
        {
          text: [
            'Claaaaaaaawwwwww',
            'Clawwwwwww',
            'Claaaaaaw',
            'Claw',
            'Cla',
            'Caw',
          ],
          prompt: 'Build a regex pattern that matches the first four lines of clawish code but not the last two using the + (plus) and the * (asterix)',
          answer: 'Cla*w+',
        }, {
          text: [
            'Clawwwwwwless-Otter',
            'Clwing-Otter',
            'Clawwwwwwwd-Otter',
            'Clawing-Otterzzzz',
            'Claww-Otter',
            'Claw-Oterz',
            'Caw-Otterz',
            'Clang-Otter',
          ],
          prompt: 'Build a regex pattern that matches the first five lines of claw-ish-otter-ish text but not the last three using the + (plus),* (asterix) , and . (dot)',
          answer: 'Cla*w.+Otterz*',
        }, {
          text: [
            'Clawwwwwwless-Otter',
            'Clwing-Otter',
            'Clawwwwwwwd-Otter',
            'Clawing-Otterzzzz',
            'Claww-Otter',
            'Claw-Oterz',
            'Caw-Otterz',
            'Clang-Otter',
          ],
          prompt: 'Build a regex pattern that matches everything.' ,
          answer: '.+',
        }
      ],
      instructions: {
        title: `Multipliers Part 1 + * (plus asterix)`,
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
      fact: 'Otters have particularly muscular tails that can reach up to one foot in length. As a general guide, an otter’s tail constitutes about one third of its body length. The only exception is sea otters as their tails are shorter and less muscular. Otters’ tails are used as navigational tools, guiding and steering otters in the water.',
      puzzles: [
        {
          text: [
          `Cho C. Chang`,
          `Seamus O. Finnigan`,
          `Viktor N. Krum`,
          `Luna L. Lovegood`,
          `Urchin S. Malfoy`,
          `Barry G. pOtter`,
          `Danny D. pOtter`,
          `Garny B. pOtter`,
          `Harry J. pOtter`,
          `Jerry A. pOtter`,
          `Marry P. pOtter`,
          `Perny B. pOtter`,
          `Timmy P. pOtter`,
          `Harry G. Rubeus`,
          `Bon T. Weasley`,
          `Don P. Weasley`,
          `Ron L. Weasley`],
          prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex to match the first name of all the weasley brothers except Don.' ,
          answer: '[^D]on',
        }, {
          text: [
          `Cho C. Chang`,
          `Seamus O. Finnigan`,
          `Hermione J. Granger`,
          `Viktor N. Krum`,
          `Flipper I. Longbottom`,
          `Luna L. Lovegood`,
          `Urchin S. Malfoy`,
          `Barry G. pOtter`,
          `Danny D. pOtter`,
          `Garny B. pOtter`,
          `Harry J. pOtter`,
          `Jerry A. pOtter`,
          `Marry P. pOtter`,
          `Perny B. pOtter`,
          `Timmy P. pOtter`,
          `Harry G. Rubeus`,
          `Bon T. Weasley`,
          `Don P. Weasley`,
          `Ron L. Weasley`],
          prompt: 'You have a list of all of the otters currently attending Hogwarts school of Beachcraft and Oceanry that are enrolled in professor Furwick’s charms class. Build a regex pattern, using the ^ (caret), that selects the full name of all the members of the Otter family except Berry and Jerry.',
          answer: '[^BJ][eai].+pOtter',
        },
      ],
      instructions: {
        title: `Character Class Negation [^] (carret)`,
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

  refSheetContent: [
    [
      ["g",	"global search flag"],
      [".",	"any single character"],
      ["[paw]",	"a single character of: p, a, or w"],
      ["[^paw]", "any single character except: p, a, or w"],
      ["[a-z]",	"any single character in the range a-z"],
      ["[a-zA-Z]", "any single character in the range a-z or A-Z"],
      ["\d", "any digit"],
      ["\D", "any non-digit"],
      ["\w", "any word character (letter, number, underscore)"],
    ],
    [
      ["\W", "any non-word character"],
      ["o{3}", "exactly 3 of "],
      ["t{3,}",	"3 or more of t"],
      ["t{3,6}", "between 3 and 6 of t"],
      ["e?", "zero or one of e"],
      ["r*", "zero or more of e"],
      ["s+", "one or more of s"],
      ["(o|t)",	"o or t"],
    ],
    [
      ["^",	"start of line"],
      ["$",	"end of line"],
      ["\A", "start of string"],
      ["\z", "end of string"],
      ["\s", "any whitespace character"],
      ["\S", "any non-whitespace character"],
      ["\\b", "any word boundary"],
      ["(...)",	"capture everything enclosed"],
    ],
  ],
  currentExerciseIndex: 0,
  currentLevelIndex: 0,
  globalFlag: true,
  toggleRefSheet: false,
  userRegex: '',
  curLvlCorrectRegex: false,
  splash: true,
}

export default initialState;
