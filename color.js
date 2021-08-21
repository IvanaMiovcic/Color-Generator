const buttonElement = document.getElementById('button');
const bodyElement = document.getElementById('body');

var r = 255;
var g = 255;
var b = 255;

var hexR;
var hexG;
var hexB;

//assigns a random value for each rgb color
function changeColor (domElement) {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);

  domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  document.getElementById('red-p').innerHTML = `R: ${r}`;
  document.getElementById('green-p').innerHTML = `G: ${g}`;
  document.getElementById('blue-p').innerHTML = `B: ${b}`;
}

//converts the rgb values to hexidecimal
function convertToHex (hexR, hexG, hexB) {
  hexR = r.toString(16);
  hexG = g.toString(16);
  hexB = b.toString(16);

  if (hexR.length < 2) {
    hexR = hexR.padStart(2, '0');
  }

  if (hexG.length < 2) {
      hexG = hexG.padStart(2, '0');
  }

  if (hexB.length < 2) {
      hexB = hexB.padStart(2, '0');
  }

  document.getElementById('hex').innerHTML = `HEX: #${hexR}${hexG}${hexB}`;
}

buttonElement.addEventListener('click', () => {
  changeColor(bodyElement);
  convertToHex();
});
