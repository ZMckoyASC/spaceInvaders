function setup(){
    createCanvas(600,600);
    background(51);
}
function draw(){
    shipers();
}
function shipers(){
    let ship = {
        color: ["red","blue","yellow"],
        size: 300,
    };
    rect(300,540,20,50);
    rect(300, 540, 20, 70);
    rect(300, 540, 20, 30);
    rect(340, 570, 20, 90);
    fill(ship.color[1])
}

