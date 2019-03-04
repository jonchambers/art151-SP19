
var canvas;

var name;

//input
var slider;
var greeting;
var nameInput;

var startStoryBool = false;

function preload(){
	
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(120);
	beginning();
}

function draw() {
	if(startStoryBool == true){
		startStory();
	}

}

function beginning(){
	greeting = createP("Please type your name and press enter");
	nameInput = createInput();

	//check and see if the user pressed enter
	nameInput.changed(startStoryElements);
}

function startStoryElements(){

	greeting.hide();
	nameInput.hide();
	 slider = createSlider(0, 255, 0);
	 name = createElement('h1', nameInput.value());
	createP(nameInput.value() + " control the size of teh ellipse");
	startStoryBool = true;
}

function startStory(){
	
	 background(120);
	 //slider requires at least two arguments
	//createSlider(min value, max value, starting value)
	 
  	print(slider.value());
  	fill(slider.value());
  	ellipse(400, 400, slider.value(), slider.value());
}


function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
}
 
 






