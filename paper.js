class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,(radius-20)/2,{restitution:0.3,friction:0.5,density:1.2});
        this.radius=radius
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        imageMode(CENTER);
       image(  this.image,0,0,this.radius,this.radius);
        pop()
    }


}