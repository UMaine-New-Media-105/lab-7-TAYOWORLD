function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  
  let roundX = 0
  let roundY = 0
  
  let roundXd = 0
  let roundYd = 0
  
   for(let counter=0; counter < 8; counter ++){
  roundRect(roundX,roundY)
     roundX = roundX + 50 
   }
   roundYd= roundYd+ 50
   
  for(let counter=0; counter < 8; counter ++){
  roundRect(roundXd,roundYd)
     roundXd = roundXd + 50 
   }
  for(let counter=0; counter < 8; counter++){
    for(let counter=0; counter < 8; counter++){
      roundRect(counter )
      
    }
  }
  
  
  
}

function roundRect(x,y){
  push();
  rect(x,y,50,50)
  pop();
}
