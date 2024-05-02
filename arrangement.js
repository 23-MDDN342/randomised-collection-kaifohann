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

  //clear screen
  background(bg_color1);
  noStroke();
  //call my grid
  drawCell();
}

function drawCell() {
  noFill();
  let w = min(canvasWidth, canvasHeight);
  //call two square recursive grids, placed next to each other to fill the screen
  createCell(padX,canvasHeight-20,w-padX*2,w-padX*2,4);
  createCell(padX*2-20,canvasHeight-20,w-padX*2,w-padX*2,4);

}

//recursive grid function 
function createCell(posX, posY, wid, hei, depth){
  if(depth>0){
    stroke(0)
    strokeWeight(2)
    createCell(posX, posY, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX+wid/2, posY, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX, posY+hei/2, wid/2, hei/2, depth-int(random([1,2])))
    createCell(posX+wid/2, posY+hei/2, wid/2, hei/2, depth-int(random([1,2])))


  } else {
  
      let peach;
      //establish discrete variables
      let lip_value = int(random(1, 3));
      let nose_value = int(random( 1, 6));
      let eye_value = int(random( 1, 5));
      let FfringeCut = int(random(1, 3));
      let MHair_type = int(random(1, 4));
      let stache;

      //continuous variability in width and height of face
      let headWidth = random(10, 17);
      let faceHeight = random(7.5, 10.5);

      let Fhair_type = int(random( 1, 4));

      //continuous variability in curve of bottom of hair
      let hairCurve1 = random( 0.3, 2);
      let hairCurve2 = random( 0.3, 2);

     
      

      //if male hair type is a cap, make a moustache rarer
      if (MHair_type == 1) {
        stache = int(random(1, 6))
      } else {
      //stache is more likely when man does not have cap
        stache = int(random(1, 3));
      } 

      //colour spinner for weighted selection
      let colourSpinner = random(0,100);
    

        push();
        translate(posX+wid/2, posY+hei/2);
        scale(-wid/22, -hei/22);

      //call functions based on weighted selection colour spinner
        if (colourSpinner <= 5) {
          peach = true;
          redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type, stache, peach);
        } else if (colourSpinner >= 95) {
          peach = true;
          blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut, peach);
        } else if (colourSpinner >5 && colourSpinner <= 50) {
          peach = false;
          redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type, stache, peach);
        } else if (colourSpinner > 50 && colourSpinner < 95) {
          peach = false;
          blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut, peach);
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
