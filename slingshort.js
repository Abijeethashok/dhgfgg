class slingshort{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.slingshort = Constraint.create(options);
        World.add(world, this.slingshort);
    }
    fly(){
        this.slingshort.bodyA=null
    }
    display(){
        if(this.slingshort.bodyA){
        var pointA = this.slingshort.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
}