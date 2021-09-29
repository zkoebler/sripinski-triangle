function setup() {
    createCanvas(1000, 1000);
     frameRate(2);
     //noLoop();
  }
  function midpoint(x1,x2){
    return (x1+x2)/2;
  }
  
  function drawPattern(centerX,centerY,x,depth)
  {
    if(depth < 1)
    {
      return;
    }
    let Ax = centerX;
    let Ay = centerY - (sqrt(3)/3)*x;
    
    let Bx = centerX+(x/2);
    let By = centerY+(sqrt(3)/6)*x;
    
    let Cx = centerX-(x/2);
    let Cy = centerY+(sqrt(3)/6)*x;
    
    triangle(Ax,Ay,Bx,By,Cx,Cy);
    
    drawPattern(midpoint(centerX,Ax),midpoint(centerY,Ay),x/2,depth-1);
    drawPattern(midpoint(centerX,Bx),midpoint(centerY,By),x/2,depth-1);
    drawPattern(midpoint(centerX,Cx),midpoint(centerY,Cy),x/2,depth-1);
    
    
  }
  
  let x = 1;
  function draw() {
    background(250);
    drawPattern(500,500,800,x);
    if(x == 8){
        delay(5000);
        x = 1;
    } else {x +=1;}
    
  }
