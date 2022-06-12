let canvas;
let context;

function render(list, options) {
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
  
  // prepare pointer, callback and render functions
  let pointer = 0;
  let next = function() {
    pointer++
    if (pointer < list.length) {
      renderElement(list[pointer])
    } else {
      exit()
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
  
  let exit = function() {
    const bitmap = canvas.transferToImageBitmap();
    self.postMessage({msg: 'render', bitmap});
  }
  
  // Start recursion
  renderElement(list[pointer])
}

self.onmessage = function(ev) {
  if (ev.data.msg === 'init') {
    list = ev.data.list;
    options = ev.data.options;
    
    canvas = ev.data.canvas;
    context = canvas.getContext('2d');
    render(list, options)
  }
}
