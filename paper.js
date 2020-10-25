class Paper{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        dencity:1.2
    
    }
    this.body=Bodies.circle(x,y,30,options);
    World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        
        circle(0,0,30);

        pop() 
    }
}