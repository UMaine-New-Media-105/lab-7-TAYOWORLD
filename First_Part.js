myColors = ["green","red","brown", "gold"," purple","blue","grey" ]

function setup() {
  createCanvas(400,400);
  noLoop();
}

function draw() {
  background(220);
  
  let tuffX = 40
  let tuffY = 40 
  
  let tuffXr = 350
  let tuffYr = 40 
  
  for(let counter=0; counter < 12; counter ++){
    tuffSprite(tuffX,tuffY)
    tuffX = tuffX + 30;
    tuffY = tuffY + 30
    
  }
  
  for(let counter=0; counter < 12; counter ++){
  tuffSprite(tuffXr,tuffYr)
    tuffXr = tuffXr - 30
    tuffYr = tuffYr + 30 
  
  
  }
    
}


function tuffSprite(x,y){
  push();
  fill(random(myColors))
  ellipse(x,y,30)
  pop();
}
