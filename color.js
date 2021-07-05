const buttonElement = document.getElementById('special-button');
const bodyElement = document.getElementById('special-body');


var r = 255;
var g = 255;
var b = 255;

var hexR;
var hexG;
var hexB;

function changeColor (domElement) {
   r = Math.floor(Math.random() * 255);
   g = Math.floor(Math.random() * 255);
   b = Math.floor(Math.random() * 255);

  domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

  hexR = r.toString(16);
  hexG = g.toString(16);
  hexB = b.toString(16);
}

buttonElement.addEventListener('click', () => {
  changeColor(bodyElement);
  document.getElementById('red-p').innerHTML = `R: ${r}`;
  document.getElementById('green-p').innerHTML = `G: ${g}`;
  document.getElementById('blue-p').innerHTML = `B: ${b}`;
  document.getElementById('hex').innerHTML = `HEX: #${hexR}${hexG}${hexB}`;
});
