class Bob{
    constructor(x,y,w,h){
        this.w=20
        this.h=40
        
    this.body=Matter.Bodies.circle(x,y,this.w,{
      
        restitution:1,
        friction:0,
        density:1

       })
    Matter.World.add(myworld,this.body)
    
    }
    display(){
    push()
    fill("green")
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    
    ellipseMode(RADIUS)
    ellipse(0,0,this.w)
    pop()
    }
    }