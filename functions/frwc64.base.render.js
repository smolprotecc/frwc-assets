frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}
frwc64.base64 = typeof frwc64.base64 != 'undefined' ? frwc64.base64 : {}

frwc64.base64.render = function(list, target, options) {
  // check options
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  if (options) {
    x = options.x || x
    y = options.y || y
    width = options.width || width
    height = options.height || height
  }
  
  // reference the target
  let canvas = document.querySelector(target);
  let context = canvas.getContext();
  // prepare pointer, callback and render functions
  let pointer = 0;
  let next = function() {
    pointer++
    if (pointer < list.length) {
      renderElement(list[pointer])
    }
  }
  let renderElement = function(element) {
    let image = new Image();
    image.onload = function() {
      context.drawImage(image, x, y, width, height);
      next();
    }
    image.src = element
  }
  
  renderElement(list[pointer])
}
