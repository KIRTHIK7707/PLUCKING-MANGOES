class Chain{
	constructor(bodyA,bodyB){
		
		var options={
             bodyA:bodyA,			 
			pointB:bodyB, 
			stiffness:0.007, 
			length:1
		}
		
		this.bodyA=bodyA
		this.pointB=bodyB
		this.Chain=constraint.create(options)
		World.add(world,this.Chain)
	}

	attach(body){
		this.Chain.bodyA=body;
	}

	released(){
		this.Chain.bodyA=null;
	}

	display(){
		if(this.chain.bodyA!=null){
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}