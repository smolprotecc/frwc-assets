frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}

frwc64.warriorManager = (function() {

  // Do some posthoc processing
  let posthoc = function() {
    // data source
    let warriors = frwc64.warriors
    // data variables
    let _warriors = {}
    let names = {firstNames:{}, jobs:{}, suffixes: {}}
    let traits = {
      backgrounds: {},
      companions : {},
      bodies     : {},
      heads      : {},
      shields    : {},
      weapons    : {},
      runes      : {},
    }
    let affinities = {}
    // calculation variables
    let allowed_attributes = ['background','companion','body','head','shield','weapon','rune']
    let mapped_attributes = {background: 'backgrounds', companion: 'companions', body: 'bodies', head: 'heads', shield: 'shields', weapon: 'weapons', rune: 'runes'}
    
    // loop
    for (var k in warriors) {
      let warrior = warriors[k]
      let id = warrior.image.replace("https://portal.forgottenrunes.com/api/warriors/img/", '')
      
      // handle name
      let name = warrior.name
      if (name.match('of')) {
        let firstname = name.match(/^\w+/)
        if (firstname) {
          names.firstNames[firstname] = names.firstNames[firstname] || []
          names.firstNames[firstname].push(id)
        } else {
          names.firstNames['no-first'] = names.firstNames['no-first'] || []
          names.firstNames['no-first'].push(id)
        }
        let suffix = name.replace(firstname, '')
        let t;
        t = suffix.split('of the')
        if (t.length < 2) {
          t = suffix.split('of')
          if (t.length < 2) {
            t = suffix
          }
        }
        t = t.map(n => n.trim())
        if (t.length == 2) {
          names.jobs[t[0]] = names.jobs[t[0]] || []
          names.jobs[t[0]].push(id)
          names.suffixes[t[1]] = names.suffixes[t[1]] || []
          names.suffixes[t[1]].push(id)
        } else {
          names.suffixes[suffix] = names.suffixes[suffix] || []
          names.suffixes[suffix].push(id)
        }
        /*
        names.suffixes[suffix] = names.suffixes[suffix] || []
        names.suffixes.push(id)*/
      }
      
      // handle traits
      var attributes = warrior.attributes
      var outputs = {}
      for (var m in attributes) {
        var attr = attributes[m]
        if (allowed_attributes.indexOf(attr.trait_type) != -1) {
          let key = mapped_attributes[attr.trait_type]
          traits[key] = traits[key] || {}
          traits[key][attr.value] = traits[key][attr.value] || []
          traits[key][attr.value].push(id)
          outputs[attr.trait_type] = attr.value
        }
        if (attr.trait_type == 'Affinity') {
          affinities[attr.value] = affinities[attr.value] || {}
          affinities[attr.value]['list'] = affinities[attr.value]['list'] || []
          affinities[attr.value]['list'].push(id)
          
          allowed_attributes.forEach(function(attribute) {
            let mapped = mapped_attributes[attribute]
            affinities[attr.value][mapped] = affinities[attr.value][mapped] || []
            affinities[attr.value][mapped][outputs[attribute]] = affinities[attr.value][mapped][outputs[attribute]] || []
            affinities[attr.value][mapped][outputs[attribute]].push(id)
          })
        }
      }
    }
  
    console.log(traits)
    console.log(affinities)
    console.log(names)
  }

  return {
    posthoc: posthoc,
  }
})()