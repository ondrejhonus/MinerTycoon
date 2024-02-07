let miners = [];
let minerImage;
let gold = localStorage.getItem("gold") || 0;

//**************************************************************//
//************************ MINERS ******************************//
//**************************************************************//
class Miner{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 10;
        this.color = '#00FF00';
    }
    draw(){
        fill(this.color);
        ellipse(this.x, this.y, this.size);
        image(minerImage, this.x-25, this.y-16, 50, 50);
    }
}

//**************************************************************//
//************************ SETUP *******************************//
//**************************************************************//

function preload() {
    minerImage = loadImage('../img/miner.png');
}

  function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight-6);
    frameRate(60);
  }
  function draw() {
    background("#000000");
    localStorage.setItem("gold", gold);
    document.getElementById("gold").innerText = gold + " Gold";
    //miners.push(new Miner(width/2, height/2));
    for (let i = 0; i < miners.length; i++){
    miners[i].draw();
  }
    //////////////////////////// GOLD COUNTER ////////////////////////////

if (frameCount % 60 == 0){
    gold = parseInt(gold) + 1 + miners.length * 1.01;
    //gold = 0
    }

}

setTimeout(() => {
  document.getElementById('loading-screen').style.display = 'none';
}, 2000);

function buyMiner(){
    if (gold >= 10){
        miners.push(new Miner(random(width), height/4));
        gold -= 10;
    }
}