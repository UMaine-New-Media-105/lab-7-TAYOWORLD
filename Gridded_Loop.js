function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(220);
  let roundX = 0
  let roundY = 0
  
  let roundXd = 0
  let roundYd = 0
  
  let x = 0 
  let rectY = 100
  
  let X = 0
  let rectYs = 150
  
  let a = 0 
  let rectYa = 200
  
  let b = 0
  let rectYb = 250
  
  let c = 0 
  let rectYc = 300
  
  let e = 0
  let rectYe = 350
  
 
   for(let counter=0; counter < 8; counter ++){
  roundRect(roundX,roundY)
     roundX = roundX + 50 
   }
   roundYd= roundYd+ 50
   
  for(let counter=0; counter < 8; counter ++){
  roundRect(roundXd,roundYd)
     roundXd = roundXd + 50 
   }
//   for(let counter=0; counter < 8; counter++){
//     for(let counter=0; counter < 8; counter++){
//       roundRect(counter )
      
//     }
//   }
  for(let counter = 0; counter < 8; counter ++){
    roundRect(x,rectY)
    x = x + 50
    
  }
  
  for(let counter = 0; counter < 8; counter ++){
    roundRect(X,rectYs)
    X = X + 50
    
  }
  for(let counter = 0; counter < 8; counter ++){
    roundRect(a,rectYa)
    a = a + 50
  }
  for(let counter = 0; counter < 8; counter ++){
    roundRect(b,250)
    b = b + 50
    
  }
  
  for(let counter = 0; counter < 8; counter ++){
    roundRect(c,rectYc)
    c = c + 50
  }
  for(let counter = 0; counter < 8; counter ++){
    roundRect(e,rectYe)
    e = e + 50
  }
  
  
}

function roundRect(x,y){
  push();
  rect(x,y,50,50)
  pop();
}
