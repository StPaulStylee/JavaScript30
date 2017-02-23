const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //ctx is where the drawing actually occurs
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // this will stop the draw function when is drawing is false
  console.log(e);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
// if user leaves window while holding mouse down and renters with mouseup,
// browser will still thing mouse is down because the event wasnt triggered
// on the window
canvas.addEventListener('mouseout', () => isDrawing = false);
