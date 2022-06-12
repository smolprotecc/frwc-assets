let canvas;
let context;

let render = (function() {
  // check options
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  
  let next = function(list) {
    if (list.length > 0) {
      renderElements(list)
    } else {
      exit()
    }
  }
    
  let renderElements = async function(list) {
    // https://stackoverflow.com/questions/56553281/webworker-offscreencanvas-draw-regular-image/56553680#56553680
    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    let element = list.shift()
    
    const blob = await fetch(element).then(res => res.blob());
    const image = await createImageBitmap(blob);
    context.drawImage(image, x, y, width, height);
    next(list);
  }
  
  let exit = function() {
    const bitmap = canvas.transferToImageBitmap();
    self.postMessage({msg: 'render', bitmap});
  }
  
  let start = function(list, options) {
    if (options) {
     x = options.x || x
     y = options.y || y
     width = options.width || width
     height = options.height || height
    }
    // Start recursion
    renderElements(list)
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
