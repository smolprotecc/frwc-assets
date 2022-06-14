frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}
frwc64.ponies = typeof frwc64.ponies != 'undefined' ? frwc64.ponies : {}

frwc64.ponies.names = {
    splitter: function(input) {
      let prefixes = this.prefixes
      let suffixes = this.suffixes
      let modify = input
      let prefix = ''
      let name   = ''
      let suffix = ''

      for (var i = 0; i < prefixes.length; i++) {
        let pattern = new RegExp('^' + prefixes[i] + '')
        if (modify.match(pattern)) {
          prefix = prefixes[i]
          modify = modify.replace(prefixes[i], '')
          break
        }
      }
      for (var i = 0; i < suffixes.length; i++) {
        let pattern = new RegExp('' + suffixes[i] + '$')
        if (modify.match(pattern)) {
          suffix = suffixes[i]
          modify = modify.replace(suffixes[i], '')
          break
        }
      }
      name = modify.trim()
      return {prefix: prefix, name: name, suffix: suffix, fullname: input} 
    },
    prefixes: [
    ],
    suffixes: [
      'the Affectionate',
      'the Agreeable',
      'the Amazing',
      'the Bold',
      'the Brilliant',
      'the Charming',
      'the Cordial',
      'the Courageous',
      'the Crazy',
      'the Dependable',
      'the Diligent',
      'the Dutiful',
      'the Efficacious',
      'the Enchanting',
      'the Feisty',
      'the Flamboyant',
      'the Friendly',
      'the Honorable',
      'the Incredible',
      'the Joyous',
      'the Keen',
      'the Lackluster',
      'the Lazy',
      'the Lucid',
      'the Lucky',
      'the Lustrous',
      'the Maniacal',
      'the Mirthful',
      'the Moderate',
      'the Obedient',
      'the Opulent',
      'the Outstanding',
      'the Perfect',
      'the Polite',
      'the Poetic',
      'the Prankish',
      'the Quick',
      'the Radiant',
      'the Rude',
      'the Ruthless',
      'the Saintly',
      'the Sensible',
      'the Smarmy',
      'the Splendid',
      'the Stupendous',
      'the Sturdy',
      'the Sweet',
      'the Vivacious',
      'the Wondrous',
    ],
}