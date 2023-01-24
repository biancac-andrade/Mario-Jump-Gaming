//declaração variáveis por Diego Araújo

var pipe, pipeImg;
var cloud, cloudImg, cloud2, cloudImg2;
var block, blockImg;
var floor, floorImg;
var flower, flowerImg;
var floorInvisible;
var mario, marioImg;
var theEnd, theEndImg;

// declaração de variaveis dos grupos por Bianca Cristina
var grupoBarreiras, grupoClouds;

function preload() {
  //chamada das imagens por Diego Araújo
  pipeImg = loadImage("img/warp-pipe.png");
  cloudImg = loadImage("img/cloud.png");
  cloudImg2 = loadImage("img/cloud2.png");
  blockImg = loadImage("img/block.png");
  floorImg = loadImage("img/floor.png");
  flowerImg = loadImage("img/flower.png");
  marioImg = loadAnimation("img/mario.gif");
  theEndImg = loadAnimation("img/theEnd.jpeg");
}

function setup() {
  createCanvas(1365, 627);

  // posição, tamanhos do mario por Bianca Cristina
  mario = createSprite(100, 140, 20, 20);
  mario.addAnimation("mario", marioImg);
  mario.scale = 0.3;
  mario.x = 50;

  // posição, tamanhos do chão por Bianca Cristina
  floor = createSprite(100, 180, 160, 20);
  floor.addImage("floor", floorImg);
  floorInvisible = createSprite(200, 170, 800, 10);
  floorInvisible.visible = false;

  // chamada de grupos por Bianca Cristina
  grupoBarreiras = new Group();
  grupoClouds = new Group();
}

function draw() {
  // cor do fundo por Bianca Cristina
  background("#BFF0D4");

  // a velocidade e divisão do chão  por Bianca Cristina
  floor.velocityX = -2;
  if (floor.x < 0) {
    floor.x = floor.width / 2;
  }

  // comando para pular, chão invisivel e gravidade do mario por Bianca Cristina
  if (keyDown("space")) {
    mario.velocityY = -10;
  }
  mario.velocityY = mario.velocityY + 0.8;
  mario.collide(floorInvisible);

  // adicionando as barreiras e nuvens por Bianca Cristina
  criaBarreira();
  criaCloud();

  drawSprites();
}

// função das barreias com posicao, velocidade, loop e tamanho e nomea o grupo de barreira  por Bianca Cristina
function criaBarreira() {
  if (frameCount % 70 === 0) {
    var barreira = createSprite(700, 150, 40, 10);
    barreira.velocityX = -2;

    var num = Math.round(random(1, 2, 3));

    switch (num) {
      case 1:
        barreira.addImage(blockImg);
        break;
      case 2:
        barreira.addImage(flowerImg);
        break;
      case 3:
        barreira.addImage(pipeImg);
        break;
      default:
        break;
    }

    barreira.scale = 0.05;

    barreira.lifetime = 500;
    grupoBarreiras.add(barreira);
  }
}

// função das nuvens com posicao, velocidade, loop e tamanho e nomea o grupo de nuvens por Bianca Cristina
function criaCloud() {
  if (frameCount % 50 === 0) {
    var cloud = createSprite(700, 50, 40, 10);
    cloud.velocityX = -2;

    var num = Math.round(random(1, 2));

    switch (num) {
      case 1:
        cloud.addImage(cloudImg);
        break;
      case 2:
        cloud.addImage(cloudImg);
        break;
      default:
        break;
    }

    cloud.scale = 0.1;
    cloud.y - Math.round(random(15, 70));
    cloud.lifetime = 500;

    grupoClouds.add(cloud);
  }
}
