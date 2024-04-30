/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [255,255,255];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);
  slider9 = createSlider(0, 100, 50);
  slider10 = createSlider(0, 100, 50);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container');
  slider10.parent('slider10Container');

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}



function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();

  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  //have random inform other types of random


  push();
   let lip_value = int(map(s1, 0, 100, 1, 2));
   let nose_value = int(map(s2, 0, 100, 1, 5));
   let eye_value = int(map(s3, 0, 100, 1, 4));
   //let headHeight = map(s4, 0, 100, 8, 16);
   let headWidth = map(s4, 0, 100, 10, 16);
   let faceHeight = map(s5, 0, 100, 7.5, 10.5);
   let Fhair_type = int(map(s6, 0, 100, 1, 3));
   let MHair_type = int(map(s6, 0, 100, 1, 3))
   let hairCurve1 = map(s7, 0, 100, 0.3, 2);
   let hairCurve2 = map(s8, 0, 100, 0.3, 2);
   let FfringeCut = int(map(s9, 0, 100, 1, 2));
   let stache = int(map(s10, 0, 100, 1, 2));
   let peach = boolean(int(random(0, 3)));
   
  if (mode == '2') {
   // draw face using values mapped from sliders
   
   
   //let hairLength = map(s6, 0, 100, 5, 15);
   
   blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut, peach);
   
  }
  else if (mode == '1') {
  // let slider value 1 indicate thinness
    redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type, stache, peach);
  } /*
if (mode == '2')

  
 }
  
  {
 
}*/
pop();
  


  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
