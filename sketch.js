// Il y a quatres composante prinicpale dans le tableau. Deux qui apparaissent de facto et deux qui sont activés
// à travers l'interactivité. 
// 1- Le Bezier. 2- Les lignes multicolore d'arrière-plan *sont laissé plus pale pour laisser l'espace colorimétrique
//au prochaines formes et créer un "punch" avec ces dernières.
// 3- Les cerles multicolores (activité par un clic) 4- Les lignes arc-en-ciel activé par la flèche "bas"


// 1-Variables du Bézier

var x1 = -100;
var y1 = 50;

var x2 = -60;
var y2 = -100;

var x3 = 670;
var y3 = 250;

var x4 = 670;
var y4 = -100;

var grad = 0;


  // 2- Variables des lignes d'arrières plan. 
  var stepX;
  var stepY;
  var square;
  
  
    //3- Variables des cercles multicolore
    var circles = [];
    

      //4- Variables des lignes multi-colore
      var lineModuleSize = 0 ;
      var angle = 0;
      var angleSpeed = 3;
      var value = 110 ;
      lineModule = null;


function setup() {
createCanvas(windowWidth, windowHeight);
colorMode(HSB);
background(0, 0, 100);

// 2- Création Lignes (doit être fait en premier comme elles sont dans l'arrière-plan)
// Valeur aléatoire de couleurs
  var w = random(5, 10);
  var h = random(20, 30);
  var hueRect = random(0, 360);

//Décalage des lignes 
  stepX = width;
  stepY = random(10, 20);

// boucle de créations des lignes
  for (var gridY = 0; gridY < height; gridY += stepY) {
  for (var gridX = 0; gridX < width; gridX += stepX) {
  noStroke();
  fill((random(0, 360)), 100, 80, 0.6);
  rect(gridX, gridY, stepX, stepY);
  }}

  // 1- Création du Bézier (Boucle identique à chaque création)

    for (var i = 0; i < 10; i++) {

    x1 = x1 + 8;
    y1 = y1 + 20;

    x2 = x2 + 8;
    y2 = y2 + 20;

    x3 = x3 + 8;
    y3 = y3 + 20;

    x4 = x4 + 8;
    y4 = y4 + 20;

    grad = grad + 36


    noFill();
    stroke(grad, 90, 90);
    strokeWeight(24);
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
  
  
          //4- Variable de couleur pour la ligne multi-couleur
           var col = color (140, 100, 100); 
    }

function draw() {
  autoScale (640, 360); 
 //3- Création de du cercle lorsqu'activés.  
          var circleL = circles.length;
          for ( var m =0; m < circleL ; m++ ) {
              var c = circles[m];
              c.draw();}
              
              

  //4- Création des lignes multi-couleurs
    if (mouseIsPressed) {
    var x = clickPosX; 
    var y = clickPosY; 
  
    strokeWeight (2); 
    noFill(); 
    stroke(value,100,100, 0.4); 
    push(); 
    translate (x,y); 
    rotate (radians(angle)); 
    if (lineModule !== null) {
      line (lineModule, 0, 0, lineModuleSize, lineModuleSize); 
    }
    else {
      line (0,0, lineModuleSize, lineModuleSize); 
    }
    angle = angle + angleSpeed; 
    
    pop(); 
  }}
// fin de la fonction DRAW  
  
// Début des fonction individuel 

//3- Fonction pour la création du cercle + fonction de création (flèche du bas)
function circlePop() {

        this.x = (mouseX);
        this.y = (mouseY);
        this.size = random(50, 80) -10 ;
        this.colors = [ ];
        for ( var a = 0 ; a < 6 ; a++ ) {
         this.colors.push(color(random(0,360) , 100, 100) );
        }


        this.draw = function() {
          var temp_size = this.size;
          for (var n = 0; n < 6 ; n++){
          noStroke(); 
          fill (this.colors[n]);
          ellipse(this.x, this.y, temp_size ,  temp_size );
          temp_size  = temp_size  - 10  ;
        }
}
}

function keyReleased() {
if (keyCode == DOWN_ARROW) {
      var c = new circlePop();
      circles.push( c );
}}


    //4- Création des lignes lorsque la souris est cliqué
    function mousePressed () {
    lineModuleSize = random (10,60); 
  
    clickPosX = mouseX; 
    clickPosY = mouseY; }

      function keyPressed() {
      if (key === '1') {
        value = 1;
      } else if (key == '2') {
        value = 40;
      } else if (key == '3') {
        value = 80;
      } else if (key == '4') {
        value = 120;
      }else if (key == '5') {
        value = 160;
      }else if (key == '6') {
        value = 200;
      } else if (key == '7') {
        value = 240;
      } else if (key == '8') {
        value = 280;
      }else if (key == '9') {
        value = 320;
      }}
      
function autoScale(targetWidth, targetHeight) {
        var aw = windowWidth/targetWidth;
        var ah = windowHeight/targetHeight;
        translate(windowWidth*0.5,windowHeight*0.5);

        scale( min(aw,ah) );
        translate(-targetWidth*0.5,-targetHeight*0.5);

}
  
  
