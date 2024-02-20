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
//extender de la clase ninja y crear la clase sensei
class Sensei extends Ninja {
    constructor(name){
        super(name,200,10,10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses");
    }
}
const kakashi = new Sensei("kakashi Hatake");
kakashi.speakWisdom();
kakashi.showStats();