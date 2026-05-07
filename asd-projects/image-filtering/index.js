// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify)


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      console.log(image[i][j]);
      var pixelArray = rgbStringToArray(image[i][j])
      // This is where I’ll modify the color values later
     filterFunction(pixelArray);
     var updatedPixel = rgbArrayToString(pixelArray)
    console.log("pixel:", updatedPixel);
    (image[i][j]) = updatedPixel
// applyFilter(decreaseBlue);

console.log("pixelArray:", pixelArray);
console.log("updatedPixel:", updatedPixel);
    }
  }
}
  


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) { 
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length ;i++)(
    console.log(image[i])
)
} 

// TODO 6: Create the keepInBounds function
function keepInBounds(value) {
  if (value < 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  } else { 
    return value
  }
}

// TODO 4: Create reddify filter function
function reddify(pixel) {
  const RED = 200;
  pixel[0] = RED;

}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixel) {
const BLUE = -60;
pixel[0] = BLUE;
}
function increaseGreenByBlue(pixel) {
const GREEN = 200;
const BLUE = 200;

}
// CHALLENGE code goes below here
