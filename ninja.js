class Ninja{
    constructor(name, health= 100, speed= 3, strength= 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.stength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name);
        console.log("Health:" = this.health);
        console.log("Speed:" + this.speed);
        console.log("Strength:" + this.stength);
    }

    drinkSake(){
        this.health += 10;
    }
}