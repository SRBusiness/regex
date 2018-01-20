levels: [
  {
    title: 'Literal Characters'
    puzzle: {
      text: 'Otters spend a good part of their day grooming themselves. They clean their fur by biting it and scratching it against rocks, or rubbing it on logs or grass. They actually have two layers of fur: a dense undercoat that traps air and a topcoat of long, waterproof hairs. Otters have the densest fur in the world. It ranges from 250,000 to a million hairs per square inch, according to the Defenders of Wildlife.',
      prompt: [
        'Build a regex pattern using literal characters that matches the text "fur"',
        'Build a regex pattern using literal characters that matches the text "coat"',
        'Build a regex pattern using literal characters that matches the text "250,000"'
      ]
      answer: ['/fur/', '/coat/', '/250,000/']
    },
    instructions: {

    }
  },

]


paragraph = {
  text: 'An important things to note about metacharacters is that if we want to use them as literal characters in our regex we need to escape them using the ',
  meta:	'\ (backslash) ',
  text:	'character. Did you know that a group of otters is called a romp, bevy, or a raft?  For example the regex we would ',
  regex:	'/romp\./ ',
  text:	'which would match “romp.”  If we forgot the backslash ',
  regex: '/romp./ ',
  text:	'the dot would still have its special meaning and would match the text “romp” plus any character.'
}
