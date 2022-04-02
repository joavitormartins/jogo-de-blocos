
/*var nome = ["artur", "sergio",10]
console.log(nome)
*/

var grupoBlocos
var raquete,bola,borda,imgB;

var pontos = 0

function preload(){
  imgB = loadImage("bola.png");

  }
  

function setup(){

createCanvas(525,400)




   bola = createSprite(250,250,20,20)
   bola.addImage("correndo",imgB);
   bola.scale = 0.1

   raquete = createSprite(200,350,120,10)
   grupoBlocos = new Group()

   //criando as bordas
   borda = createEdgeSprites()
  

bola.velocityX = 4
bola.velocityY = 4




criarLinha(65,"red")
criarLinha(65+29*1,"blue")

criarLinha(65+29*2,"green")

criarLinha(65+29*3,"yellow")
criarLinha(65+29*4,"pink")






}

function draw(){
background(0)
text("pontos: "+pontos,250,30);

raquete.x = World.mouseX

if(raquete.x < 65){
    raquete.x = 65
}

if(raquete.x > 515){
  raquete.x = 515
}

if(!grupoBlocos[0]){
  bola.velocityX = 0
  bola.velocityY = 0
}


drawSprites()

bola.bounceOff(borda[0])
bola.bounceOff(borda[1])
bola.bounceOff(borda[2])
bola.bounceOff(raquete)
bola.bounceOff(grupoBlocos,destruirbloco)


}



function criarLinha(y,cor){

  for(var c = 0; c<8; c++){

    var brick = createSprite(65+54*c,y,50,25)
 
     brick.shapeColor = cor
     grupoBlocos.add(brick)
 
 }

}
function destruirbloco(bola,brick){
brick.remove();
pontos= pontos+1
}