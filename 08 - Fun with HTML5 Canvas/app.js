const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); //ctx is where the drawing actually occurs
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;
ctx.globalCompositeOperation = 'difference';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidthDecending = false;

function draw(e) {
  if (!isDrawing) return; // this will stop the draw function when is drawing is false
  if (ctx.lineWidth < 10 || ctx.lineWidth > 75) {
    lineWidthDecending = !lineWidthDecending;
  }
  if (lineWidthDecending) {
    ctx.lineWidth--;
    ctx.globalCompositeOperation = 'difference';
  } else {
    ctx.lineWidth++;
    ctx.globalCompositeOperation = 'xor';
  }
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
// if user leaves window while holding mouse down and renters with mouseup,
// browser will still thing mouse is down because the event wasnt triggered
// on the window
canvas.addEventListener('mouseout', () => isDrawing = false);
