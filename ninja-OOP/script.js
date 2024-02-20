//crear una clase ninja
class Ninja{
    constructor(name,salud,velocidad,fuerza){
        this.name = name;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log("El nombre del ninja es: " + this.name);
    }
    showStats(){
        console.log("Nombre: " + this.name + ", Salud: " + this.salud + ", Velocidad: " + this.velocidad + ", Fuerza: " + this.fuerza);
    }
    drinkSake(){
        this.salud += 10;
    }
}
//sasuke
let myNinja = new Ninja("Sasuke", 100);
myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();
myNinja.showStats();