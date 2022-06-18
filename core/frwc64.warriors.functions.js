frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {} 
frwc64.warriors = typeof frwc64.warriors != 'undefined' ? frwc64.warriors : {}

frwc64.warriors.functions = {
  retrieveComponents: function(idx) {
    let list = frwc64.warriors._list
    let components = frwc64.warriors._components
    
    // if soul, send call to frwc64.souls
    let warrior = list[idx]
    if (!warrior) { return false }
    
    let order   = ['background','body','head','rune','companion','weapon','shield']
    let section = ['backgrounds','bodies','heads','runes','companions','weapons','shields']
    let output  = []
    order.forEach(part => {
      let component;
      if (part == 'background') {
        // component = warrior.background
      } else {
        component = warrior.components[part]
        output.push(component)
      }
      // output.push(components[component])
    })
    output = this.checkVariations(output, idx)
    output = output.map(component => components[component] ? components[component] : component)
    output.unshift(components[warrior.background])
    return {id: idx, components: output}
  },
  
  checkVariations: function(components, id) {
    let reference = frwc64.warriors._components
    let variations = frwc64.warriors._variations
    let mapping = frwc64.warriors._headmap
    let exceptions = frwc64.warriors._exceptions
   
    // We let the head influence the body
    let body = components[0]
    let head = components[1]
    
    let _body = reference[body] ? reference[body] : body
    let _head = reference[head]
    
    // map heads to variations first, i.e. two different types of Forgotten Lady heads for a single body type
    if (mapping[_head]) {
      let m = mapping[_head]
      for (var b in m) {
        if (m[b].indexOf(id) != -1) {
          _head = b
          components[1] = b
          break
        }
      }
    }
    
    // run some strictly preserved inverse body=>head rules based on the collection
    let rules = {
      'Archipelagian': [
        {key: 'Archipelagian Light', bodies:['Red Battle Bikini']}  
      ],
      'Corsair': [
        {key: 'Corsair Dark', bodies:['Battle Bikini','Classic Gold Barbarian Bikini','Purple Valkyrie Armor','Yellow Road Spandex','Zuli Suit']}  
      ],
      'Forgotten Lady': [
        {key: 'Forgotten Lady Brown', bodies:['Street Punk with Teal Camo']}  
      ],
      'Kempo': [
        {key: 'Kempo Male', bodies:['Commando Fatigues', 'Gallus Gear']}  
      ],
      'Lady of the Mountain': [
        {key: 'Lady of the Mountain Dark', bodies:['Battle Bikini', 'Classic Gold Barbarian Bikini']}  
      ],
      'Lady of the Oasis': [
        {key: 'Lady of the Oasis Purple', bodies:['Street Punk with Teal Camo']},
        {key: 'Lady of the Oasis Green',  bodies:['Armor of Water','Classic Leather Barbarian Bikini','Red Battle Bikini']} 
      ],
      'Valkyrie': [
        {key: 'Valkyrie Blonde', bodies:['Classic Leather Barbarian Bikini','Red Battle Bikini']}  
      ]
    }
    
    if (rules[_head]) {
      let g = rules[_head]
      for (var i = 0; i < g.length; i++) {
        let rule = g[i]
        let bodies = rule.bodies
        if (bodies.indexOf(_body) != -1) {
          components[1] = rule.key 
          _head = rule.key
          break
        }
      }
    }
    
    // change the body based on the head
    let r;
    if (variations[_body]) {
      let m = variations[_body]
      for (var b in m) {
        if (m[b].indexOf(_head) != -1) {
          r = b
          break
        }
      }
    }
    if (r) {
      components[0] = r
    }
    
    // finally exceptions for <>head/body vs body2
    if (exceptions[_head]) {
      let m = exceptions[_head]
      for (var b in m) {
        if (m[b].indexOf(id) != -1) {
          _body = b
          components[0] = b
          break
        }
      }
    }
    
    return components
  },
 
  generateBase64: function(components) {
    return components.map(trait => frwc64.warriors.base64.get(trait))
  },
  
  render: function(idx, target, options) {
    let renderComplete = 'rendered-wizard'
    let list = this.retrieveComponents(idx)
    let elements = this.generateBase64(list.components)
    
    // Do rendering
    const canvas = document.querySelector(target)
    const ctx    = canvas.getContext('2d')
    if (!options ||
        (options && typeof options.clearRect == 'undefined') ||
        (options && typeof options.clearRect != 'undefined' && options.clearRect != false)) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    let x = 0, y = 0, w = canvas.width, h = canvas.height;
    if (options) {
      if (options.x) { x = options.x }
      if (options.y) { y = options.y }
      if (options.w) { w = options.w }
      if (options.h) { h = options.h }
    }
    
    let background;
    let count = 0
    elements.forEach((item, index) => {
      count++
      if (item) {
        let image = new Image()
        image.onload = function() {
          ctx.drawImage(image, x, y, w, h)
          if (index === 0) { //background 
            background = ctx.getImageData(x, y, 1, 1).data
            let color = `rgba(${background[0]}, ${background[1]}, ${background[2]}, ${background[3]/255*1})`
            ctx.fillStyle = color
            ctx.fillRect(x, y, w, h)
          }
          if (index >= count - 1) {
            document.dispatchEvent(new CustomEvent(renderComplete))
          }
        }
        image.src = item
      }
    })
  
    return {id: idx, elements: elements}
  }
}
