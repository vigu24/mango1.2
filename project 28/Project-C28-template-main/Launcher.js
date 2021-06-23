class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
fly(){
this .launch.bodyA=null;

}
    display(){

    if (this .launch.bodyA){

    
        var pointA = this.launch.bodyA.position;
        var pointb = this.launch.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointb.x, pointb.y);
    }
    }
    
}