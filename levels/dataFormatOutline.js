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



Level 0 - Intro to Regular expressions
What are Regular Expressions?
Regular expression are a search pattern, made up of a sequence of characters, that try to describe or parse text. Regex is its own language that provides a flexible and powerful way to match (validate and specify) strings of text. Regular expressions are commonly referred to as “regex” or “regexp”.
Regex are a powerful tool with many applications such as
Searching for text within a larger text body that matches a pattern (find all dates in a document)
Replace text items (look through a word doc and replace misspelled word X with correctly spelled word Y)
Validate that a users input meets certain criteria (email, password, or credit card validation)
Reformat text - split a large block of text into smaller pieces by matching a specific pattern. (modify the layout of a document so you can use it in a different text editor)
Regexs are made up of two forward slashes, one at the beginning and one at the end, and the pattern we are trying to match lives in between. After the final forward slash you can add a flag(s) which alter the matching pattern. (we will learn about those more later).
INSERT IMAGE OF A REGEX HERE
General hints for how to tackle learning regular expressions
Split regular expressions down into smaller parts
Read aloud the steps in your regex and try to be as literal as possible. Ex “a followed by an b followed by a c”
Don’t assume your regex is matching what you want, test each piece as you go. If you get stuck try using a visualizer tool to like REGEXPER or Regulex to help you understand exactly what your regex is matching.
Note - this is meant to be a broad introduction to regex and will not cover the specifics nuances of each language. If you are looking for a more detailed explanation this is not the place for you, see the resources part of the site for some ideas of where else to look.
Level 1 - Literal Characters
Regular expressions are made up of two different types of characters. Normal text characters like the letter “a”  or the number  “1” are called literals while special characters are called metacharacters. Don’t worry about metacharacters for now, we will go over them slowly as we progress.
If your regex pattern doesn’t use any metacharacters and uses literals characters then it is simply performing a plain text search. For example the regex /art/ will look for any time the letters a-r-t appear in a row. This could match the “art”, “starting”, or “artisan” but would not match “Artifact” because regex’s, by default, are case sensitive unless you tell them to act otherwise with a flag (we will cover that later).

Text: “The sea-otter is one of the few animals to use tools. Sea otters use rocks, other shellfish, or man-made objects to pry prey from rocks and use them as a hammer or anvil to break open the hard outer shell of some prey species. They also have pockets of loose skin under each foreleg for storing their tools and to hold prey it has found on the seafloor. Sea otters float on their back and break open their prey by pounding it on the rock or other tool on their chest.”
Prompt: “Try to build a regex that matches the text ‘sea’”
regex: /sea/
Level 2 - The regex dot .
Now that we know how to use literals to search for literal pieces of text let’s get into the really powerful part of regex using metacharacters. There are over a dozen metacharacters, such as | (pipe),  [ ] (square brackets),  or a + (plus), all of which have a special meaning for building patterns. To start we are going to focus on the . also known as a dot, point, or wildcard.
In most cards games a wildcard is a playing card that substitutes for any other card in card the game. In regex the dot takes a similar meaning and can take the form of any single character (letter, digit, whitespace, everything) except a line break. When using regular expressions it is common to try and match things that shares a common pattern or character structure but may vary in makeup, the regex dot is a useful placeholder character when building these sorts of patterns.
Ex. regex /.otter/ matches “botter” or “rotter”
An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the backslash character \. For example if we wanted to use a period as a literal in a regex we would /r\.mp/ which would match “r.mp”, if we forgot the backslash /r.mp/ the dot would still have its special meaning and would match the text “romp”. Fun fact a group of otters is known as a romp, bevy, or a raft.

Text:
Positive matches
o773R-MBA.pup
o773R-MBA.r4f
o773R-MBA.R0M
o773R-MBA.-.g
Negative matches
o77eR-MBA.pup
o773R-mba.pup
0773R-MBA.pup
otter-SEA.pup
Prompt: “Otter files all conform to this pattern “o773R-XXX.YYY“ where X equals a 3 character zoo abbreviation and Y equals the 3 character unique otter id. Your task is to build a regex pattern that matches all otters from the Monterey Bay Aquarium (Zoo abbreviation MBA). “
Regex: /o773R-MBA\..../

Level 3 - character classes [ ]
We know we can use the dot when we want match any character (digit, number, whitespace) but if you want to be more specific in our patterns you should use the the square bracket [ ] metacharacters, sometimes referred to as character classes or character sets.
A character class allows you to specify that you want the regex to match one character from a list of possible characters. Just place the characters that are possible matches inside the square brackets. Anything inside the square brackets should be treated like it has an implied “or” between them. For example the regex /[o1]/ would match either the letter “o” or the digit “1”. Characters classes allow you to be more flexible are are great for searching for words that are occasionally capitalized or for commonly misspelled words.
Any characters metacharacters lose their special meaning and become literal character when they appear inside a character class. The exception to this is the caret ( ^ )  and the dash (-) which gain a new meanings we will cover shortly.
the regex /[oO]tter/ would match both  “Otter” and  “otter”


Text: “Sea otters are known for their curiocity and playfulness. They like to slide off embankments into the water, wrestle, chase their tails and participate in other fun games. Their curiosity may lead them to explore their surroundings and investigate new things.”
Prompt: “In the text above the word Curiosity has been misspelled. Build a regex pattern that will match both the correct and incorrectly spelled version of the word.”
Regex: /curi[ou]sity/

Level 4 - Character class negation ^
In character classes you can use the caret character ^ after the opening square bracket to negate anything that follows it in the character class. This will mean that the character class will match a any single character that is not listed in the character class. Using the caret at the beginning of your character class transforms it from a list of characters you do want to match into a list a characters you don’t want to match. The regex /p[^a]./ very literally means a “p” followed by a character that is not an “a” followed by any character and would match the text “pup”

Outside of a character class the ^ caret is a metacharacter and has a different meaning that we will cover in future levels. For now it is important to know that inside a character class the caret is a metacharacter only when it directly follows the opening square bracket /[^o]/, in all other cases inside a character class it is treated as a literal character /[ab^]/.

Thinking back to the last level it is worth noting that you could write a regex with either a simple character classes or character class negation that can match the same text. Composing what you want to match vs what you don’t want to match. With two approaches you decide which one would be the best fit for building your regex pattern.
Text:  “harry.otter, barry.otter, jerry.otter, larry.otter, marry.otter, perry.otter”
Prompt: “All of the otters attending hogwarts are listed above. Build a regex pattern that selects harry, marry, and perry otter using negation.
Regex: /[^blj][ea]rry\.otter/
