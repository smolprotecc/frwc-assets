let canvas;
let context;
let datum = {};

let render = (function() {
  let renderElements = async function(identifier, list, dimensions) {
    // https://stackoverflow.com/questions/56553281/webworker-offscreencanvas-draw-regular-image/56553680#56553680
    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    let element = list.shift()
    
    const blob = await fetch(element).then(res => res.blob()).catch(err){console.log(err); console.log(element)};
    const image = await createImageBitmap(blob);
    datum[identifier].context.drawImage(image, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
    // iterate
    if (list.length > 0) {
      await renderElements(identifier, list, dimensions)
    } else {
    // exit
      const bitmap = datum[identifier].canvas.transferToImageBitmap();
      self.postMessage({msg: 'render', identifier: identifier, bitmap: bitmap}, [bitmap]);
      delete datum[identifier]
    }
  }
  
  let start = async function(identifier) {
    let list = datum[identifier].list
    let options = datum[identifier].options
    
    let x = 0; 
    let y = 0;
    let width, height;
    if (options) {
     x = options.x || x
     y = options.y || y
     width = options.width || width
     height = options.height || height
    }
    // Start recursion
    await renderElements(identifier, list, {x: x, y: y, width: width, height: height})
  }
  
  return {
    start: start, 
  }
})()

self.onmessage = function(ev) {
  if (ev.data.msg === 'init') {
    datum[ev.data.identifier] = {
      list: ev.data.list,
      options: ev.data.options,
      canvas : ev.data.canvas,
      context: ev.data.canvas.getContext('2d'),
    }
    /*
    list = ev.data.list;
    options = ev.data.options;
    
    canvas = ev.data.canvas;
    context = canvas.getContext('2d');
    */
    render.start(ev.data.identifier)
  }
}
