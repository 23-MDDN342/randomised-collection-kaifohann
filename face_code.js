//draws red or sometimes peach male faces
function redFace(lip_value, nose_value, eye_value, headWidth, faceHeight, MHair_type, stache, peach) {

  let centerX = 0;
  let faceColour;

  if (peach == false) {
    //draw red faces
    faceColour = [196, 8, 8];
  } else if (peach == true) {
    //draw peach faces
    faceColour = [255, 150, 125];
  }

  // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(0.4);
  stroke(faceColour);
  noFill();

  let headHeight = map(faceHeight, 7.5, 10.5, 8, 16); //
  let headYpos = map(faceHeight, 8, 16, 3, 7.5);
  let sqhairHeight = map(headHeight, 8, 16, 8, 12)
  let hWidth = map(headWidth, 8, 16, 3, 4);
  
  //DRAW HAIR
  fill(faceColour)


  if (MHair_type == 1){
    //hat style
    fill(faceColour);
    strokeWeight(0.4);
    //center hair and center place it at the headheight top
    rect(0, -headHeight/3.9, headWidth+1, sqhairHeight, 2);
    //draw hat brim
    strokeWeight(1)
    let hatBrimLength = map(headWidth, 10, 16, -8.5, -10)
    line(centerX-headWidth/2, headYpos-faceHeight/2, hatBrimLength, headYpos-faceHeight/2);
    //DRAW FACE with top corners square
    strokeWeight(0.4);
    fill('white');
    rect(centerX, headYpos, headWidth, faceHeight, 0,0,2,2);

  } else if (MHair_type == 2) {
    //balding style
    translate(0,-(headHeight/faceHeight))
    //DRAW FACE with everything rounded 
    strokeWeight(0.4);
    fill('white');
    rect(centerX, headYpos-(headHeight/faceHeight), headWidth, headHeight+(headHeight/faceHeight), 2);
    //draw hair sides + head spots
    let sideHairLength = map(faceHeight, 7.5, 10.5, 2, 6)
    fill(faceColour);
    strokeWeight(0.4)
    rect(centerX-headWidth/2,headYpos-faceHeight/2+1, hWidth-2, sideHairLength, 0.5);
    rect(centerX+headWidth/2,headYpos-faceHeight/2+1, hWidth-2, sideHairLength, 0.5);
    point(centerX+headWidth/2-2.5, 0-headHeight/2+headYpos)
    strokeWeight(0.6);
    point(centerX+headWidth/2-2, 0-headHeight/2+headYpos+0.5)

  } else if (MHair_type == 3) {
    //big hair/russian hat vibe

    //draw flat base
    fill(faceColour);
    strokeWeight(0.4);
    //center hair and center place it at the headheight top
    rect(0, -headHeight/3.9, headWidth, sqhairHeight, 2) 
    //DRAW FACE with top corners square
    strokeWeight(0.4);
    fill('white');
    rect(centerX, headYpos, headWidth, faceHeight, 0,0,2,2);
    //DRAW SIDE BURNS
    fill(faceColour)
    let sideBrnXpos = map(headWidth, 8, 16, -4.8, -8.4)
    rect(sideBrnXpos, -2.2, 3, 6.5,1);
    rect(-sideBrnXpos,-2.2, 3, 6.5,1);
  }

//draw the facial features
drawFeatures(headWidth, headHeight, eye_value, nose_value,lip_value, faceColour, stache);
}


//draws blue or sometimes peach female faces
function blueFace(lip_value, nose_value, eye_value, headWidth, faceHeight, Fhair_type, hairCurve1, hairCurve2, FfringeCut, peach) {

  let centerX = 0;
  let faceColour;
  
  if (peach == false) {
    //draw blue face
    faceColour = [59, 133, 228];
  } else if (peach == true) {
    //draw peach faces
    faceColour = [255, 150, 125];
  }
  
  // rotation in degrees
  angleMode(DEGREES);
  rectMode(CENTER);
  strokeWeight(0.4);
  stroke(faceColour);
  noFill();

  let headHeight = map(faceHeight, 7.5, 10.5, 8, 16); 
  let headYpos = map(faceHeight, 8, 16, 3, 7.5);
  let sqhairHeight = map(headHeight, 8, 16, 8, 12)
  let hWidth = map(headWidth, 8, 16, 2, 4);
  
  //DRAW HAIR
  fill(faceColour)
  let hairWidth =  map(headWidth, 8, 16, 10, 20);

  if (Fhair_type == 1){
    //flat head hair
    //DRAW RECTANGLE HAIR BASE
    noStroke();
    let sqhairHeight = map(headHeight, 8, 16, 8, 12)
    fill(faceColour)
     //center hair and center place it at the headheight top
    rect(0, -headHeight/3.9, hairWidth, sqhairHeight, 2); 
    //DRAW SIDES OF LONG HAIR
    fill(faceColour)
    let hXpos = map(headWidth, 8, 16, -4, -8)
    rect(hXpos, 4.2, hWidth, 11,0,0,hairCurve1,hairCurve2);
    rect(-hXpos,4.2, hWidth, 11,0,0,hairCurve2,hairCurve1);

  } else if (Fhair_type == 2){
    //rounded head hair 
    noStroke();
    let arcHeight = map(headHeight, 8, 16,12,18);
    arc(0, -1,hairWidth,arcHeight, 180, 360);
    //DRAW SIDES OF LONG HAIR
    fill(faceColour)
    let hXpos = map(headWidth, 8, 16, -4, -8)
    rect(hXpos, 4.2, hWidth, 11,0,0,hairCurve1,hairCurve2);
    rect(-hXpos,4.2, hWidth, 11,0,0,hairCurve2,hairCurve1);
  } else if (Fhair_type == 3) {
    //hair with bun
    fill(faceColour);
    strokeWeight(0.4);
    //center hair and center place it at the headheight top
    rect(0, headHeight-(headHeight*1.1), hairWidth-1, sqhairHeight, 2);
    //draw bun
    ellipse(0,-headHeight+(headHeight*0.45), 4, 4);
  }

  stroke(faceColour);
  strokeWeight(0.4);
  fill('white');

  //draw the face base
  rect(centerX, headYpos, headWidth, faceHeight, 0,0,2,2);

  //draw 'middle part'
  if (FfringeCut == 1) {  
  } else if (FfringeCut ==2) {
    //DRAW FRINGE CUT TRIANGLE
    fill('white')
    noStroke();
    beginShape();
    vertex(-1,-0.5);
    vertex(0,-3);
    vertex(1,-0.5);
    endShape(CLOSE);
  }

  //draw features
  drawFeatures(headWidth, headHeight, eye_value, nose_value,lip_value, faceColour, 0);
}


//draws eyes, nose and mouth of character
function drawFeatures(headWidth, headHeight, eye_value, nose_value,lip_value, colour, stache) {

//DRAWING THE EYES
let eyeXpos = map(headWidth, 8, 16, 1.5, 3);
stroke(colour);
if (eye_value == 1) {
  //tired eye
  strokeWeight(0.7);
  point(-eyeXpos,1.5);
  point(eyeXpos, 1.5);
  strokeWeight(0.37);
  line(-eyeXpos+0.5,2.2, -eyeXpos-0.5, 2.7);
  line(eyeXpos-0.5, 2.2, eyeXpos+0.5, 2.7)
} else if (eye_value == 2) {
  //wide eye
  strokeWeight(0.37);
  noFill();
  ellipse(-eyeXpos-0.2, 1.5, 2.5, 2.5);
  ellipse(eyeXpos+0.2, 1.5, 2.5, 2.5);
  strokeWeight(1.5);
  point(-eyeXpos-0.2, 1.5);
  point(eyeXpos+0.2, 1.5);
} else if (eye_value == 3){
  //curved eye
  strokeWeight(0.9);
  noFill();
  point(-eyeXpos-0.5,1.5);
  point(eyeXpos+0.5, 1.5);
  strokeWeight(0.37);
  line(-eyeXpos+0.5,1.1, -eyeXpos-2, 1.1);
  line(eyeXpos-0.5, 1.1, eyeXpos+2, 1.1)
  arc(-eyeXpos-0.9, 1.15, 3, 2.5, 0, 90)
  arc(eyeXpos+0.9, 1.15, 3, 2.5, 90,180)
} else if (eye_value ==4) {
  //side eye
  strokeWeight(0.9);
  noFill();
  point(-eyeXpos-1,1.5);
  point(eyeXpos+0.5, 1.5);
  strokeWeight(0.37);
  line(-eyeXpos+0.5,1.1, -eyeXpos-2, 1.1);
  line(eyeXpos-0.5, 1.1, eyeXpos+2, 1.1)
  
}

//DRAW THE NOSES
noFill();
if (nose_value==1) {
  //long point
  strokeWeight(0.37)
  beginShape(LINES)
  vertex(0, 1);
  vertex(-1, 3.5);
  vertex(-1, 3.5);
  vertex(0, 3.5)
  endShape();
} else if (nose_value ==2){
   //even point
  strokeWeight(0.37)
  beginShape(LINES)
  vertex(0, 2.5);
  vertex(-1, 3.5);
  vertex(-1, 3.5);
  vertex(0, 4)
  endShape();   
} else if(nose_value ==5) {
  //straight w/ curve bottom
  strokeWeight(0.37)
  line(0,1,-1,3.5);
  arc(0, 3.5, 2,1, 0, 180);
} else if (nose_value == 4) {
  //longer skinny
  strokeWeight(0.37)
  arc(0, 2.4, 1,3.2, 70, 250);
} else if(nose_value ==3) {
  //wide
  strokeWeight(0.37)
  arc(0, 3.5, 2,1.3, 0, 180);
  arc(-1.4, 3.5, 0.7,0.5, 0, 180);
  arc(1.4, 3.5, 0.7,0.5, 0, 180);
}


//DRAW THE LIPS
let mouthYpos = map(headHeight, 8, 16, 5, 6.5);
if (lip_value == 1){
  //lip type 1 - no cupid bow
  strokeWeight(0.37);
  fill(colour)
  line(-0.5, mouthYpos+0.4, 0.5, mouthYpos+0.4)
  noStroke();
  arc(0, mouthYpos, 3, 1.5, 180, 360);
} else if (lip_value == 2){
  //lip type 2 - cupid bow
  strokeWeight(0.37);
  fill(colour)
  line(-0.5, mouthYpos+0.4, 0.5, mouthYpos+0.4)
  noStroke();
  arc(-0.5, mouthYpos, 2, 1.5, 180, 360);
  arc(0.5, mouthYpos, 2, 1.5, 180, 360);
} 

//draw stache
if (stache == 1) {
    quad(-2, 4.2, 2, 4.2,3, mouthYpos, -3, mouthYpos);
}


}