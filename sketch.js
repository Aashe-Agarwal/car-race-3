var  database;
var playerCount,gamestate =0;
var game,form,player,allPlayers,car1,car2,car3,car4,cars,car1img,car2img, car3img,car4img,trackimg;

function preload(){
  car1img=loadImage("car1.png");
  car2img=loadImage("car2.png");
  car3img=loadImage("car3.png");
  car4img=loadImage("car4.png");
  trackimg=loadImage("track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-200);
 game = new Game();
 game.getState();
 game.start();
 
}

function draw(){
  background("white");
  
  if (playerCount===4){
    game.update(1);
  }
    if (gamestate===1){
      clear();
      game.play();
    }
    if (gamestate===2){
      game.end();
    }  
}

