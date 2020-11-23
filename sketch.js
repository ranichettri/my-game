var database;
var gS;

function setup(){
  createCanvas(displayWidth-2,displayWidth-100);
  database = firebase.database();
  game = new Game();
  //gS = 10;
  game.getState();
  //console.log(gS);
  game.start();
}
