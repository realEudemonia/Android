/**
 * Created by jason on 8/15/16.
 */
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
  //mode buttons for event listeners
  setupModeButtons();
  //add listeners for squares
  addListenerSquares();
  reset();
}

function addListenerSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      var clickedColor = this.style.background;
      //compare clicked square to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
        resetButton.textContent = "Play again?"
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again!"
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of square
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
}

  resetButton.addEventListener("click", function () {
    reset();
  });

  function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = color;
    }
  }

  function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors array
    for (var i = 0; i < num; i++) {
      //getRandomColor and fill array
      arr.push(randomColor());
    }
    //return array
    return arr;
  }

  function randomColor() {
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
