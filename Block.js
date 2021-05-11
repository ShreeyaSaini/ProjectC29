class Block {
    constructor(x,y) {

        var options={
            restitution: 0.8,
            density: 1.0,
            friction: 1.0
        }

        this.body = Bodies.rectangle(x,y,25,25,options);
        World.add(world,this.body);
    
    } display() {
        var pos = this.body.position;

        fill("red");
        rectMode(CENTER)
        strokeWeight(1.5);
        stroke("black");
        rect(pos.x, pos.y,25,25);
    }
}