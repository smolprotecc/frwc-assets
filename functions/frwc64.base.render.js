// https://levelup.gitconnected.com/improve-javascript-performance-with-offscreencanvas-1180dc5376e9
// Requires a .js file to run a worker for offscreen non-blocking rendering
const workerFile = 'frwc64.base.renderWorker.js';

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
  let offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height);
  let worker = new Worker(workerFile);
  worker.postMessage({msg: 'init', canvas: offscreenCanvas}, [offscreenCanvas,list,target,options]);
  worker.addEventListener('message', function(ev) {
    if(ev.data.msg === 'render') {
      context.transferFromImageBitmap(ev.data.bitmap);
    }
  });
}
