frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {} 
frwc64.wizards = typeof frwc64.wizards != 'undefined' ? frwc64.wizards : {}

frwc64.wizards.functions = {
  retrieveComponents: function(idx) {
    let list = frwc64.wizards._list
    let components = frwc64.wizards._components
    
    // if soul, send call to frwc64.souls
    let wizard = list[idx]
    if (!wizard) { return false }
    
    let order   = ['background','body','head','prop','familiar','rune']
    let section = ['backgrounds','bodies','heads','props','familiars','runes']
    let output  = []
    order.forEach(part => {
      let component;
      if (part == 'background') {
        component = wizard.background
      } else {
        component = wizard.components[part]
      }
      output.push(components[component])
    })
    return {id: idx, components: output}
  },
 
  generateBase64: function(components) {
    return components.map(trait => frwc64.wizards.base64.get(trait))
  },
  
  render: function(idx, target, options) {
    let renderComplete = 'rendered-wizard'
    let list = this.retrieveComponents(idx)
    let elements = this.generateBase64(list.components)
    
    // Do rendering
    const canvas = document.querySelector(target)
    const ctx    = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let x = 0, y = 0, w = canvas.width, h = canvas.height;
    
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
            ctx.fillRect(0, 0, canvas.width, canvas.height)
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