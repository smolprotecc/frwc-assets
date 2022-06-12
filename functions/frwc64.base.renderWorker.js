let canvas;
let context;

let render = (function() {
  let next = function(list, dimensions) {
    if (list.length > 0) {
      renderElements(list, dimensions)
    } else {
      exit()
    }
  }
    
  let renderElements = async function(list, dimensions) {
    // https://stackoverflow.com/questions/56553281/webworker-offscreencanvas-draw-regular-image/56553680#56553680
    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    let element = list.shift()
    
    const blob = await fetch(element).then(res => res.blob());
    const image = await createImageBitmap(blob);
    context.drawImage(image, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
    next(list, dimensions);
  }
  
  let exit = function() {
    const bitmap = canvas.transferToImageBitmap();
    self.postMessage({msg: 'render', bitmap});
  }
  
  let start = function(list, options) {
    let x, y, width, height;
    if (options) {
     x = options.x || x
     y = options.y || y
     width = options.width || width
     height = options.height || height
    }
    // Start recursion
    renderElements(list, {x: x, y: y, width: width, height: height})
  }
  
  return {
    start: start, 
  }
})()

self.onmessage = function(ev) {
  if (ev.data.msg === 'init') {
    list = ev.data.list;
    options = ev.data.options;
    
    canvas = ev.data.canvas;
    context = canvas.getContext('2d');
    render.start(list, options)
  }
}
