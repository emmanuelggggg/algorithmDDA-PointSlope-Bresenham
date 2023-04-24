let inputN;
let buttonS;
let distans;
const rex = /^[0-9]+$/;
function setup() {
    createCanvas(1440,800);   
  head();
}
function draw() {
  background('#394867');

  fill('#B9E9FC')
  text('Ingrese un numero', width / 2.5, (height / 2) - 300);
  textSize(30);
  text("Valor :" + inputN.value(), 20, 50);
  textSize(30);
}

function head(){
  inputN = createInput('');
  inputN.size (250,30);
  inputN.position( width / 2.5, (height / 2) - 250);
  // inputN.input(validarNum);

  buttonS = createButton('Sumbit');
  
  buttonS.position(width / 2.5, (height / 2) - 150);
  buttonS.size (250,40);
  buttonS.style('background-color','rgb(33,42,62)');
  buttonS.style('color', '#FFFFFF');
  buttonS.style('font-size', '15px');
  buttonS.style('border', 'none');
  buttonS.style('border-radius', '5px');
  buttonS.style('box-shadow', '3px 3px 3px 2px rgba(0, 0, 0, 0.2)');
  buttonS.mousePressed(sumbit);
}
function sumbit(){
  alert("felicidades ganaste un auto 2023");
}

// function validarNum(){
//   if(!inputN.value.test(rex)){
//     console.log('no es numero');
    
//   }else{
//     console.log('es numero');
//   }
  
// }



// function draw() {
//     background(220);
//     let rect1 = {x: 140, y: 150, w: 100, h: 75}; // Definir el primer rectángulo
//     let rect2 = {x: mouseX/1.3, y: mouseY/1.2, w: 100, h: 75}; // Definir el segundo rectángulo con el mouse
    
//     // Llamar a la función para dibujar los rectángulos
//     rectangulo(rect1.x, rect1.y, rect1.w, rect1.h);
//     rectangulo(rect2.x, rect2.y, rect2.w, rect2.h); 
//     // Verificar colisión
//     if (rect1.x < rect2.x + rect2.w && rect1.x + 
//         rect1.w > rect2.x && rect1.y < rect2.y + 
//         rect2.h && rect1.y + rect1.h > rect2.y) {

//         console.log('Colisión!');

//         fill(255, 0, 0, 128); 
//         rect(0, 0, width, height);
//         textAlign(CENTER, CENTER);
//         textSize(50);
//         fill(255);
//         text('Colisión', width / 2, (height / 2) - 100);
//     }
// }

// function rectangulo(x, y, w, h) {
//     let x2 = x + w;
//     let y2 = y + h;
//     DDA(x, y, x2, y);
//     DDA(x2, y, x2, y2);
//     DDA(x2, y2, x, y2);
//     DDA(x, y2, x, y);
// }

// //algoritmo DDA
// function DDA(x1, y1, x2, y2) {
//     // let dx = x2 - x1;
//     // let dy = y2 - y1;
//     // let m = dy / dx;
//     // let x = x1;
//     // let y = y1;
//     // if (Math.abs(dx) > Math.abs(dy)) {
//     //     let steps = Math.abs(dx);
//     //     let xInc = dx > 0 ? 1 : -1;
//     //     let yInc = m * xInc;
//     // for (let i = 0; i < steps; i++) {
//     //     point(x, y);
//     //     x += xInc;
//     //     y += yInc;
//     // }
//     // } else {
//     //     let steps = Math.abs(dy);
//     //     let yInc = dy > 0 ? 1 : -1;
//     //     let xInc = dy / m * yInc;
//     //     for (let i = 0; i < steps; i++) {
//     //     point(x, y);
//     //     x += xInc;
//     //     y += yInc;
//     //   }
//     // }

//     //algoritmo de bresenham
//     let dx = abs(x2 - x1);
//     let dy = abs(y2 - y1);
  
//     // determinar el paso para x e y
//     let sx = (x1 < x2) ? 1 : -1;
//     let sy = (y1 < y2) ? 1 : -1;
  
//     // inicializar valores para el algoritmo
//     let err = dx - dy;
//     let e2 = 0;
  
//     // dibujar la línea usando el algoritmo de Bresenham
//     while (x1 != x2 || y1 != y2) {
//       point(x1, y1);
//       e2 = 2 * err;
//       if (e2 > -dy) {
//         err = err - dy;
//         x1 = x1 + sx;
//       }
//       if (e2 < dx) {
//         err = err + dx;
//         y1 = y1 + sy;
//       }
//     }




// }


// function draw() {
//   background(220);
//   stroke(0); // color de línea negro
//   cuadrado(100, 100, 150); // dibuja un cuadrado de tamaño 150 en (100,100)
// }

// function bresenhamLine(x0, y0, x1, y1) {
//   let dx = abs(x1 - x0);
//   let dy = abs(y1 - y0);
//   let sx = x0 < x1 ? 1 : -1;
//   let sy = y0 < y1 ? 1 : -1;
//   let err = dx - dy;

//   while (x0 !== x1 || y0 !== y1) {
//     point(x0, y0);
//     let e2 = err * 2;
//     if (e2 > -dy) {
//       err -= dy;
//       x0 += sx;
//     }
//     if (e2 < dx) {
//       err += dx;
//       y0 += sy;
//     }
//   }
// }

// function cuadrado(x, y, lado) {
//   bresenhamLine(x, y, x + lado, y); // línea superior
//   bresenhamLine(x + lado, y, x + lado, y + lado); // línea derecha
//   bresenhamLine(x + lado, y + lado, x, y + lado); // línea inferior
//   bresenhamLine(x, y + lado, x, y); // línea izquierda
// }