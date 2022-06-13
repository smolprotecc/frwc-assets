// https://levelup.gitconnected.com/improve-javascript-performance-with-offscreencanvas-1180dc5376e9
// Requires a .js file to run a worker for offscreen non-blocking rendering
const workerFile = 'functions/frwc64.base.renderWorker.js';

frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}
frwc64.base64 = typeof frwc64.base64 != 'undefined' ? frwc64.base64 : {}

frwc64.base64.render = function(list, target, options) {
  let canvas = document.querySelector(target);
  let context = canvas.getContext('bitmaprenderer');
  let offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height);
  // const offscreenCanvas = canvas.transferControlToOffscreen();
  
  let worker = new Worker(workerFile);
  worker.addEventListener('message', function(ev) {    
    // console.log(ev.data)
    // context.transferFromImageBitmap(ev.data)
    if (ev.data.msg === 'render') {
      // console.log(ev.data.bitmap)
      context.transferFromImageBitmap(ev.data.bitmap);
    }
  });
  worker.postMessage({msg: 'init', canvas: offscreenCanvas, list: list, options: options}, [offscreenCanvas]);
}
