//declaração variáveis por Diego Araújo
var pipe, pipeImg;
var cloud, cloudImg, cloud2, cloudImg2;
var block, blockImg;
var floor, floorImg;
var flower, flowerImg;
var floorInvisible;
var mario, marioImg;
var theEnd, theEndImg;
var state = "go";

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
  marioImg = loadAnimation("img/mario1.png", "img/mario2.png");
  theEndImg = loadImage("img/theEnd2.png");
}

function setup() {
  createCanvas(1365, 627);

  // posição, tamanhos do mario por Bianca Cristina
  mario = createSprite(100, 50, 20, 10);
  mario.addAnimation("mario", marioImg);
  mario.scale = 0.9;
  mario.x = 100;

  // posição, tamanhos do chão por Bianca Cristina
  floor = createSprite(100, 610, 20, 20);
  floor.addImage("floor", floorImg);
  floor.scale = 2;
  floorInvisible = createSprite(50, 580, 160, 10);
  floorInvisible.visible = true;

  // chamada de grupos por Bianca Cristina
  grupoBarreiras = new Group();
  grupoClouds = new Group();

  // chamada de imagem de fim de jogo por Bianca Cristina
  theEnd = createSprite(690, 240, 20, 20);
  theEnd.addImage(theEndImg);
  theEnd.scale = 0.8;
  theEnd.visible = false;
}

function draw() {
  // cor do fundo por Bianca Cristina
  background("#BFF0D4");

  // cria condicional para inicio e fim de jogo por Bianca Cristina
  if (state === "go") {
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

    if (grupoBarreiras.isTouching(mario)) {
      state = "end";
    }
  } else if (state === "end") {
    floor.velocityX = 0;
    mario.velocityY = 0;

    grupoBarreiras.setVelocityXEach(0);
    grupoClouds.setVelocityXEach(0);

    theEnd.visible = true;

    textSize(28);

    fill("#8B0000"); // cor da letra
    text("Aperta o botão espaço para reiniciar o jogo!!!", 415, 50);

    if (keyDown("space")) {
      state = "go";
      grupoBarreiras.destroyEach();
      grupoClouds.destroyEach();

      // nao ebibe a imagem de fim do jogo
      theEnd.visible = false;
    }
  }

  drawSprites();
}

// função das barreias com posicao, velocidade, loop e tamanho e nomea o grupo de barreira  por Bianca Cristina
function criaBarreira() {
  if (frameCount % 70 === 0) {
    var barreira = createSprite(700, 548, 40, 10);
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

    barreira.scale = 0.1;

    barreira.lifetime = 500;
    grupoBarreiras.add(barreira);
  }
}

// função das nuvens com posicao, velocidade, loop e tamanho e nomea o grupo de nuvens por Bianca Cristina
function criaCloud() {
  if (frameCount % 90 === 0) {
    var cloud = createSprite(700, 300, 40, 10);
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

    cloud.scale = 0.2;
    cloud.y - Math.round(random(15, 70));
    cloud.lifetime = 500;

    grupoClouds.add(cloud);
  }
}
