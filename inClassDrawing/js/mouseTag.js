
//ball x, y position
var xPos;
var yPos;

//ball speed
var xSpeed;
var ySpeed;

//score
var score = 0;

//stores how close our mouse is to the ball
var mouseDist;

//booleans can be either true or false
var start = false;
var end = false;

//runs once
function setup(){
	createCanvas(windowWidth, windowHeight);
	

	//generate random ball positions
	xPos = random(15, windowWidth-15);
	yPos = random(15, windowHeight-15);

	//print("x position: " + xPos);

	//set the speed variables
	xSpeed = 2;
	ySpeed = 2;

	start = true;
}


//runs in loop
function draw(){
	if(start == true){
		game();
	}
	if(end == true){
		win();
	}
}


function windowResized(){

	resizeCanvas(windowWidth, windowHeight);
	
	xPos = random(15, windowWidth-15);
	yPos = random(15, windowHeight-15);

}

//custom functions
function game(){
	background(200);
	textSize(40);
	text('Score: ' + score +'00', 10, 50);
	//take cuurent xPos, update it with the speed variable
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;
	//print(xPos);
	//use variables for ball position
	ellipse(xPos, yPos, 30, 30);

	//check to see if the ball position has reached
	//edges of screen, if so reverse
	if((xPos >= windowWidth-15) || (xPos <= 15)){
		xSpeed = xSpeed * -1;
		fill(random(255), random(255), random(255));
	}

	if((yPos >= windowHeight-15) || (yPos <= 15)){
		ySpeed = ySpeed * -1;
		fill(random(255), random(255), random(255));
	}

	//calculating distance between mouse and ball
	mouseDist = dist(mouseX, mouseY, xPos, yPos);
	
	if(mouseDist <= 15){
		score++;
		xPos = random(15, windowWidth-15);
		yPos = random(15, windowHeight-15);
		ySpeed = ySpeed * 1.2;
		xSpeed = xSpeed * 1.2;
	}
	
	if(score == 10){
		start = false;
		end = true;
	}
}

function win(){
	background(200);
	textSize(40);
	text('You Win!!!!', 10, 50);
}









