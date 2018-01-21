import styles from './reducer.css'

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
        content: `Spotted sweetlips swim, peppered moray creature jumped. Coral hogfish snake eel goatfish and Black clown goby fanatic jumping at a nurse shark. Mandarinfish in a fire fish, an algae unknown. In the coral threadfin hawkfish. Seahorse rock lobster, papershell shark or scorpionfish is, faucet snail king crab weasel shark. Foxface wabash pigtoe, ear snail banded sole or, mermaid in sea. Zebra moray at banded sole bannerfish. In seahorse banded eel, butter hamlet are butterflyfish blu.

        Tang, wabash pigtoe sea coral king crab heelsplitter, in painted comber Banded eel bicolor blenny. Black clown goby, tilefish catshark sea grape starfish, banana wrasse starfish wobbegong shark, grouper batfish ear snail are at the bottom. Fishies asian clam painted comber, king crab a elktoe a, grey whale seahorse. Coral hogfish at Bursa trigger spot hogfish bite yellow pseudochromis weasel shar.

        Seabass in angelfish. Bursa trigger funny filefish, a Snaggletooth shark lobster in. The crackin, heart pumping at Snaggletooth shark asian clam, banded eel algae applesnail lobster, lionfish tilefish banded sole an spot hogfish. Zebra moray at banded sole bannerfish. Fire fish at deap water pushed. . Quagga mussel cat shark is batfish frogfish. Banana wrasse in yellow pseudochromis non mermaid parrotfish mystery snail. Zebra moray a banded grunt houndshark. Zebra moray at banded sole bannerfish. Puffer fish stingray.

        Bicolor blenny and quickly moving, stingray menacing crab flounder, black clown goby hammerhead with lobster crawling butterflyfish. In the coral threadfin hawkfish. Wobbegong shark peaclam swimming. Milk shark swim Asian clam soldierfish. In Beautiful, ocean is Asian clam elktoe, cardinalfish deep heelsplitter foxface, with crazy Manta ray catshark shaking filefish. Floating ea `,
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
        content: `Content Level 2 Content Level 2 Content Level 2 <img src='https://jex.im/regulex/#!cmd=export&flags=&re=art'> Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 Content Level 2 `,
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
        content: `An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the <span class='${styles.meta}'>\ (backslash)</span> character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would <span className={styles.regex}>/romp\./</span> which would match “romp.”  If we forgot the backslash <span className={styles.regex}>/romp./</span> the dot would still have its special meaning and would match the text “romp” plus any character.',
        example: "I'm and example /regex/ matches some thing in a string! how cool"`,
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
  paragraph: [
    ['An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the '],
    ['\ (backslash) ', 'meta'],
    ['character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would ' ],
    ['/romp\./', 'regex'],
    [' which would match “romp.”  If we forgot the backslash ' ],
    ['/romp./', 'regex'],
    ['ANIMAL-STATEABREVIATION-AQUARIUM-GENDER-OTHER\no773R-WA-SEA-M-!34\no773R-WA-PDA-M-br5\no773R-WA-SEA-F--{k\no773R-WA-SEA-F-:)a\no773R-OR-SSA-F-r4f\no773R-OR-OCA-M-c1%\no773R-CA-SFZ-F-d0g\no773R-CA-MBA-F-13g\no773R-CA-MBA-M-0kj\n5Qw1d-CA-SFZ-F-.-1\n5Qw1d-OR-OCA-F-\\31\n5Qw1d-WA-SEA-M-!3f\n5Qw1d-WA-PDA-F-o9!\n5Qw1d-WA-SEA-F-d3w\n5Qw1d-WA-PDA-M-abc'],
  ]
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
