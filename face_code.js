/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

const blueStroke = [58, 109, 209];
const redStroke = [200, 30, 40];
const peachStroke = [255, 186, 159];

function blueFace(tilt_value, mouth_value, eye_value, headWidth, faceHeight, hairCurve1, hairCurve2) {
  const bg_color3 = [71, 222, 219];


  //let headHeight = 19;
  //let headWidth = 15;
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);
  rectMode(CENTER);

  strokeWeight(0.4);
  stroke(blueStroke);

 // head
  noFill();
  //rect(centerX, 2, headWidth, headHeight, 2);

  let headHeight = map(faceHeight, 7.5, 10.5, 8, 16); //

  //use random for colours (40%blue face, 40% red face, 20% peach face) - check colour spinner stuff 16 April
  //based on height/width of face = draw random set of eyes (width and height of head - min 10, max 20)

  //find where eyes should sit (center top third)

 


  
  //DRAW HAIR
  fill(blueStroke)
  let hairWidth =  map(headWidth, 8, 16, 10, 20);
  
  
  //DRAW RECTANGLE HAIR BASE
  let sqhairHeight = map(headHeight, 8, 16, 8, 12)
  fill(blueStroke)
  //center hair and center place it at the headheight top
  rect(0, -headHeight/3.9, hairWidth, sqhairHeight, 2) 
 
  
  /*
  //DRAW ROUND HAIR BASE
  noStroke();
  let arcHeight = map(headHeight, 8, 16,12,18);
  
  arc(0, -1,hairWidth,arcHeight, 180, 360);
  */

  //DRAW SIDES OF LONG HAIR
  fill(blueStroke)
  let hXpos = map(headWidth, 8, 16, -3.5, -8)
  let hWidth = map(headWidth, 8, 16, 3, 4);
  rect(hXpos, 4.2, hWidth, 11,0,0,hairCurve1,hairCurve2);
  rect(-hXpos,4.2, hWidth, 11,0,0,hairCurve2,hairCurve1);

  //DRAW FACE
  let headYpos = map(faceHeight, 8, 16, 3, 7.5);
  stroke(blueStroke);
  strokeWeight(0.4);
  fill('white');
  //noFill();
  rect(centerX, headYpos, headWidth, faceHeight, 0,0,2,2);
  
  
  //DRAW FRINGE CUT TRIANGLE
  fill('white')
  noStroke();
  beginShape();
  vertex(-1,-0.5);
  vertex(0,-3);
  vertex(1,-0.5);
  endShape(CLOSE);
  
  
  //EYE TYPES
  let eyeXpos = map(headWidth, 8, 16, 1.5, 3);
  stroke(blueStroke);

  if (eye_value == 1) {
      // eyes type 1
    strokeWeight(0.7);
    point(-eyeXpos,1.5);
    point(eyeXpos, 1.5);
    strokeWeight(0.37);
    line(-eyeXpos+0.5,2.2, -eyeXpos-0.5, 2.7);
    line(eyeXpos-0.5, 2.2, eyeXpos+0.5, 2.7)
  } else if (eye_value == 2) {
    //eyes type 2
    strokeWeight(0.37);
    noFill();
    ellipse(-eyeXpos-0.2, 1.5, 2.5, 2.5);
    ellipse(eyeXpos+0.2, 1.5, 2.5, 2.5);
    strokeWeight(1.5);
    point(-eyeXpos-0.2, 1.5);
    point(eyeXpos+0.2, 1.5);
  } else if (eye_value == 3){
    //draw these eyes
    strokeWeight(0.9);
    noFill();
    point(-eyeXpos-0.5,1.5);
    point(eyeXpos+0.5, 1.5);
    strokeWeight(0.37);
    line(-eyeXpos+0.5,1.1, -eyeXpos-2, 1.1);
    line(eyeXpos-0.5, 1.1, eyeXpos+2, 1.1)
    arc(-eyeXpos-0.9, 1.15, 3, 2.5, 0, 90)
    arc(eyeXpos+0.9, 1.15, 3, 2.5, 90,180)
  }
  

  

  /*
  //eyes type 2
  stroke(blueStroke);
  strokeWeight(0.37);
  noFill();
  ellipse(-eyeXpos-0.2, 1.5, 2.5, 2.5);
  ellipse(eyeXpos+0.2, 1.5, 2.5, 2.5);
  strokeWeight(1.5);
  point(-eyeXpos-0.2, 1.5);
  point(eyeXpos+0.2, 1.5);
  */

  /*
  //eyes type 3
  stroke(blueStroke);
  strokeWeight(0.9);
  noFill();
  point(-eyeXpos-0.5,1.5);
  point(eyeXpos+0.5, 1.5);
  strokeWeight(0.37);
  line(-eyeXpos+0.5,1.1, -eyeXpos-2, 1.1);
  line(eyeXpos-0.5, 1.1, eyeXpos+2, 1.1)
  arc(-eyeXpos-0.9, 1.15, 3, 2.5, 0, 90)
  arc(eyeXpos+0.9, 1.15, 3, 2.5, 90,180)
 */

  //NOSE TYPES
  
  
  //nose type 1 - long point
  stroke(blueStroke);
  strokeWeight(0.37)
  beginShape(LINES)
  vertex(0, 1);
  vertex(-1, 3.5);
  vertex(-1, 3.5);
  vertex(0, 3.5)
  endShape();
  

  /*
  //nose type 2 - even point
  stroke(blueStroke);
  strokeWeight(0.37)
  beginShape(LINES)
  vertex(0, 2.5);
  vertex(-1, 3.5);
  vertex(-1, 3.5);
  vertex(0, 4)
  endShape();
*/
  
  //DRAW LIP TYPES
  
  /*
  //lip type 1 - no cupid bow
  strokeWeight(0.37);
  fill(blueStroke)
  let mouthYpos = map(headHeight, 8, 16, 5, 6.5);
  line(-0.5, mouthYpos+0.4, 0.5, mouthYpos+0.4)
  noStroke();
  arc(0, mouthYpos, 3, 1.5, 180, 360);
  */

  //lip type 2 - cupid bow
  strokeWeight(0.37);
  fill(blueStroke)
  let mouthYpos = map(headHeight, 8, 16, 5, 6.5);
  line(-0.5, mouthYpos+0.4, 0.5, mouthYpos+0.4)
  noStroke();
  arc(-0.5, mouthYpos, 2, 1.5, 180, 360);
  arc(0.5, mouthYpos, 2, 1.5, 180, 360);

  /*// 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);*/
}

/*
function orangeAlienFace1(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}*/


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
