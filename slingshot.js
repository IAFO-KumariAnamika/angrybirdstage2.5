class slingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bird.body,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.sling=Constraint.create(options);
         this.pointB=pointB, 
    World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display()
        {if(this.sling.bodyA){
            var pointA =this.sling.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }gir
    
    
}