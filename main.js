//declaração variáveis por Diego Araújo

var pipe, pipeImg;
var cloud, cloudImg;
var block, clockImg;
var floor, floorImg;
var flower, flowerImg;
var floorInvisible;
var mario, marioImg;
var theEnd, theEndImg;

//responsável por carregar todos os arquivos
function preload() {
  //carregar todas imagens

  pipeImg = loadImage("img/warp-pipe.png");
  cloudImg = loadImage("img/clouds.png");
  blockImg = loadImage("img/block.png");
  floorImg = loadImage("img/floor.png");
  flowerImg = loadImage("img/flower.png");
  marioImg = loadAnimation("img/mario.gif");
  theEndImg = loadAnimation("img/theEnd.jpeg");
}

function setup() {
  createCanvas(800, 200);
}
