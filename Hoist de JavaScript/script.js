//1. given
console.log(hello);
var hello = "world";
//after hoisting by the interpreter
//se declara la variable hello con valor world
// se ejecuta el console.log(hello) pero como var hello no fue inicializado, el valor es undefined

//2. given
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
//after hoisting by the interpreter
//se declara la variable needle con valor haystack
//se ejecuta la funcion test()
//se declara la variable needle con valor magnet
//se ejecuta el console.log(needle) que imprime magnet

//3. given
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
//after hoisting by the interpreter
//se declara la variable brendan con valor super cool
//se declara la funcion print() que cambia el valor de la variable brendan y lo imprime
//la funcion print no es llamada por lo que se ejecuta el console.log(brendan) que imprime super cool

//4. given
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
//after hoisting by the interpreter
//se declara var food con valor chicken
//se ejecuta console.log(food) que imprime chicken
//se ejecuta la funcion eat()
//dentro de la funcion eat se declara var food con valor half-chicken, se ejecuta console.log(food) que imprime half-chicken
//el primer food no es alterado por la funcion eat
//resultado: se imprime chicken y half-chicken

//5. given
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);
//after hoisting by the interpreter
//intenta ejecutar la funcion mean() antes de ser declarada lo que dara error
//intenta imprimir food pero como mean no fue declarada, el valor es undefined
//se declara mean()
//resultado; mean is not a function, error de referencia.

//6. given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
//se declara la variable genre con valor disco
//se ejecuta rewid() que imprime rock y r&b
//se declara la funcion rewind() que cambia el valor de la variable genre a ryb y lo imprime
//trata de imprimir la variable genre pero como no fue declarada, el valor es undefined
//se ejecuta console.log(genre) que imprime disco
//resultado undefined, rock, r&b, disco

//7. given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
//se declara dojo de forma global con valor san jose
//se ejecuta un log con resultado san jose
//se ejecuta la funcion learn() que cambia el valor de referencia de dojo a seattle y lo imprime, luego a burbank y lo imprime
//se declara la funcion learn()
//resultado: san jose, seattle, burbank, san jose

//8. given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
//se llama la funcion makeDojo() este crea un objeto dojo con las propiedades de name y students
//se imprime el resultado de la llamada de la funcion makeDojo("Chicago", 65), el resultado es { name: 'Chicago', students: 65, hiring: true } porque students es mayor a 50 hiring es true
//se llama la funcion makeDojo(berkeley, 0), crea un onjeto dojo con las propiedades de name y students al ser students menor a 0, intenta asignar el valor de dojo a closed for now a dojo, pero dojo es constante y no se puede modificar
//resultado: { name: 'berkeley', students: 0, hiring: true } y error de asignacion constante
