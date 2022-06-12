let canvas;
let context;

let render = (function() {
  let renderElements = async function(list, dimensions) {
    // https://stackoverflow.com/questions/56553281/webworker-offscreencanvas-draw-regular-image/56553680#56553680
    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
    let element = list.shift()
    console.log(list)
    console.log(element)
    
    const blob = await fetch(element).then(res => res.blob());
    const image = await createImageBitmap(blob);
    console.log(blob)
    console.log(image)
    context.drawImage(image, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
    // iterate
    if (list.length > 0) {
      await renderElements(list, dimensions)
    } else {
    // exit
      console.log(canvas)
      const bitmap = canvas.transferToImageBitmap();
      console.log(bitmap)
      // self.postMessage({msg: 'render', bitmap: bitmap}, [bitmap]);
      self.postMessage(bitmap, [bitmap]);
    }
  }
  
  let start = async function(list, options) {
    console.log(p)
    let x, y, width, height;
    if (options) {
     x = options.x || x
     y = options.y || y
     width = options.width || width
     height = options.height || height
    }
    // Start recursion
    await renderElements(list, {x: x, y: y, width: width, height: height})
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
