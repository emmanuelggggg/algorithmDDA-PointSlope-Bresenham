let inputN;
let buttonS;
let distans;
let radio=120;
function setup() {
  createCanvas(1440,800);   
  head();
}
function draw() {
  fill('#B9E9FC')
  text('Ingrese un numero', width / 2.5, (height / 2) - 300);
  textSize(30);
  text("Valor :" + inputN.value(), 20, 50);
  textSize(30);
  
  
  drawCircle( 220,450, radio);
  drawCircle( 350*2,450, radio);
  drawCircle( 390*3,450, radio);
}

function head(){
  background('#394867');
  inputN = createInput('');
  inputN.size(250,30);
  inputN.position( width / 2.5, (height / 2) - 250);

  buttonS = createButton('Sumbit');
  buttonS.position(width / 2.5, (height / 2) - 150);
  buttonS.size (250,40);
  buttonS.style('background-color','rgb(33,42,62)');
  buttonS.style('color', '#FFFFFF');
  buttonS.style('font-size', '15px');
  buttonS.style('border', 'none');
  buttonS.style('border-radius', '5px');
  buttonS.style('box-shadow', '3px 3px 3px 2px rgba(0, 0, 0, 0.2)');

  buttonS.mousePressed(sumbitN);
}

function sumbitN(){
  // background('#394867');
  const lineas = inputN.value();
  if(lineas > 1){
    drawCircle( 220,450, radio);
    drawCircle( 350*2,450, radio);
    drawCircle( 390*3,450, radio);


    
    divideL(220,450, radio,lineas,'pointPLine');
    divideL(350*2,450, radio,lineas,'DDA');
    divideL(390*3,450, radio,lineas,'bresenhamLine');
  }else{
    alert("error");
    drawCircle( 220,450, radio);
    drawCircle( 350*2,450, radio);
    drawCircle( 390*3,450, radio);

  }
}

function drawCircle(x, y, r) {
  let x1 = 0;
  let y1 = r;
  let d = 1 - r;
  while (x1 <= y1) {
    point(x + x1, y + y1);
    point(x - x1, y + y1);
    point(x + x1, y - y1);
    point(x - x1, y - y1);
    point(x + y1, y + x1);
    point(x - y1, y + x1);
    point(x + y1, y - x1);
    point(x - y1, y - x1);
    if (d < 0) {
      d = d + 2 * x1 + 3;
    } else {
      d = d + 2 * (x1 - y1) + 5;
      y1--;
    }
    x1++;
  }
}
function divideL(x, y, r, d, type) {
  for (let i = 0; i < d; i++) {

    const angulo = TWO_PI * i / d;
    const x2 = x + r * cos(angulo);
    const y2 = y + r * sin(angulo);
    if (type == 'pointPLine')
      pointPLine(x, y, x2, y2);
    if (type == 'DDA')
      DDA(x, y, x2, y2);
    if (type == 'bresenhamLine')
      bresenhamLine(x, y, round(x2), round(y2));
  }
}
//algoritmo DDA
function DDA(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1

  let pasos = Math.max(Math.abs(dx), Math.abs(dy))

  const xInc = dx / pasos
  const yInc = dy / pasos

  for (let i = 0; i <= pasos; i++) {
    point(x1, y1)
    x1 += xInc
    y1 += yInc
  }
}
function bresenhamLine(x0, y0, x1, y1) {
  let dx = abs(x1 - x0);
  let dy = abs(y1 - y0);
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (x0 !== x1 || y0 !== y1) {
    
    point(x0, y0);
    let e2 = err * 2;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
  }
}
function pointPLine(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const m = (dy !== 0) ? dy / dx : 0;
  const b = y1 - m * x1;

  const xMin = min(x1, x2);
  const xMax = max(x1, x2);
  if (abs(m) == Infinity) {
      if (y2 > y1) {
          for (let y = y1; y <= y2; y++) {
              point(x1, y)
          }
      } else if (y1 > y2) {
          for (let y = y2; y <= y1; y++) {
              point(x1, y)
          }
      }
  } else {
      for (let x = xMin; x <= xMax; x++) {
          const y = m * x + b;
          point(x, y);
      }
  }
}