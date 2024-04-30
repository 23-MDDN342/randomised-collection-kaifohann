/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = 'white';
const padX = canvasWidth/2
const padY = canvasHeight/2


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);

}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
  
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {

  
  
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
    
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();
  drawCell();
  

/*
  // draw a 7x4 grid of faces
  let w = canvasWidth / 10;
  let h = canvasHeight / 5;
  for(let i=0; i<5; i++) {
    for(let j=0; j<10; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
      //less hat more bald
      //average bell curve or random domino or random spinner

      let lip_value = int(random(1, 3));
      let nose_value = int(random( 1, 6));
      let eye_value = int(random( 1, 5));
   
      let headWidth = random(10, 17);
      let faceHeight = random(7.5, 10.5);
      let Fhair_type = int(random( 1, 4));
      let hairCurve1 = random( 0.3, 2);
      let hairCurve2 = random( 0.3, 2);
      let FfringeCut = int(random(1, 3));
      let MHair_type = int(random(1, 4))

        push();
        translate(x, y);
        scale(w/25, h/25);
        if (random(0,100)<50) {
          redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type);
        } else {
        blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut);
        }
       
        pop();
       
      }
  }*/
   
}

function drawCell() {
  noFill();
  let w = min(canvasWidth, canvasHeight);
  createCell(padX,canvasHeight-20,w-padX*2,w-padX*2,4);
  createCell(padX*2-20,canvasHeight-20,w-padX*2,w-padX*2,4);

 

  //noLoop()
}

function createCell(posX, posY, wid, hei, depth){
  if(depth>0){
    stroke(0)
    strokeWeight(2)
    createCell(posX, posY, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX+wid/2, posY, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX, posY+hei/2, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX+wid/2, posY+hei/2, wid/2, hei/2, depth-int(random([1,2])))


  }else{
    //scale to canvaswidth/wid canvasheight/hei

    
    //rect(posX, posY, wid, hei);
    
   // point(posX+wid/2,posY+hei/2);

    //ellipse(posX+wid/2, posY+hei/2, wid, hei)
      let lip_value = int(random(1, 3));
      let nose_value = int(random( 1, 6));
      let eye_value = int(random( 1, 5));
   
      let headWidth = random(10, 17);
      let faceHeight = random(7.5, 10.5);
      let Fhair_type = int(random( 1, 4));
      let hairCurve1 = random( 0.3, 2);
      let hairCurve2 = random( 0.3, 2);
      let FfringeCut = int(random(1, 3));
      let MHair_type = int(random(1, 4));
      let stache = int(random(1, 3));
   

        push();
        translate(posX+wid/2, posY+hei/2);
        scale(-wid/22, -hei/22);
        if (random(0,100)<50) {
          redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type, stache);
        } else {
          blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut);
        }
       
        pop();
        


  }
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
