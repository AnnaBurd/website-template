/*
  Script to create animation of typewriting
*/

const textLines = ["Hanh phuc la cai gi nua.", "Hanh phuc la cai gi nua - 12.", "Lorem ipsum :)"];
let textLineNumber = 0;
let animatedTextElement = document.getElementById("hero-text");
let oldTextLine = animatedTextElement.innerHTML;

let pause = 500; // ms
let pauseMiddle = 1000;
let speed = 50;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(newTextLine){

  // console.log("Wait a little bit before start");
  await sleep(pauseMiddle); // Wait a little bit

  pause = (newTextLine.length + oldTextLine.length) * speed + pauseMiddle; // Adjust timeput pause before next call

  // Remove old text
  // console.log("Remove old text");
  for(let i = oldTextLine.length; i >= 0; i--){
    oldTextLine = oldTextLine.slice(0,i);
    animatedTextElement.innerHTML = oldTextLine + '︳';
    await sleep(speed / 2);
  };

  // console.log("Wait a little bit");
  await sleep(pauseMiddle); // Wait a little bit

  // Print the new text
  // console.log("Print new text");
  for (let j = 0; j <= newTextLine.length; j++){
    animatedTextElement.innerHTML = newTextLine.slice(0,j)+ '︳';
    await sleep(speed);
  }

  oldTextLine = newTextLine; // Prepare for next loop

  setTimeout(function() {

    typeWriter(textLines[textLineNumber]);
    textLineNumber++;
    if (textLineNumber >= textLines.length){
      textLineNumber = 0; // Reset String Rotation
    }
  
  }, pause);
}


// sleep(pauseMiddle * 20); // Wait a little bit before start

setTimeout(function() {

  typeWriter(textLines[textLineNumber], speed);
  textLineNumber++;

}, pause);
