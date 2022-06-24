// Encontrar el número mayor

numMayor()
 
function numMayor() {
 
let numList = [900, 4, 59, 200, 5, 97];

let results = numList.reduce( (a,b) => a > b ? a : b);

console.log(results);
}

// Encontrar el factorial 
// Cantidad que resulta de la mutiplicación de determinado número natural
// por todos los números naturales que le anteceden excluyendo en cero;
// "el factorial de 4 es 24 (producto de 4 x 3 x 2 x 1)"

function factorial(num){

    for(let i = num -1; i >=1; i--){
    num = num * i;
    console.log(num);    
    }

    return num;

}
console.log(factorial(4))

// Determinar si un número es impar 
function numImpar(){

    let numList = [15, 4, 3, 20, 5, 32];

    let results = numList.filter(num => num % 2 !== 0);
    console.log(results);
}
numImpar()

// Determinar cual es el nombre más largo

function theLongestName() {

    let nameList = ['John', 'Mark', 'Michael', 'Paul', 'Sam'];

    let results = nameList.reduce((a,b) => a.length > b.length ? a : b);
    console.log(results);

}
theLongestName()

// Determinar, crear, capitalizar unos strings

function capitalize(str) {

    let result = '';

    result = str.charAt(0).toUpperCase() + str.slice(1);

    return result

}

console.log(capitalize ('hello'));

// Encontrar el último elemento

lastElement()

function lastElement(){

    let arr = [ 3,4,7,9,44,14,55,2 ];
    
    let result = arr.filter(penul => penul === arr[arr.length -1]);

    console.log(result)
}

// Arreversar un String con un método

function stringReverse(str){

    let result = str.split("").reverse().join("");

    return result;

}

console.log(stringReverse("Hello World"))

// Arreversar un String 2

function stringReverse2(str){
    
    let newString = '';
    
    for(let i = str.length -1; i >=0; i--) {
        newString += str[1];

}
return newString;

}

console.log(stringReverse("hola mundo"))

// Arreversar un String 3

function stringReverse3(str) {

let result = str.split('').reduce((revString,char) =>{

return char + revString;

});

return result;

}

console.log(stringReverse("Hola Mundo"))


// Arreversar un String 4

function reverse(str){
    if(str.length <= 1)return str;
    return reverse(str.slice(1)) +str[0];

}
console.log (reverse("Hola Superman Bizarro"))

// Arreversar un String, palindromos 

function stringReverse(str) {

    let result = str.split('').reduce((revString,char) =>{
    
    return char + revString;
    
    })
    
    return result ===str; // convertir ese resultado en una operación buleana (true-false)//
    
    }
    
    console.log(stringReverse("anana"))

// // Escribe una función llamada linearSearch la cual acepta una Array 
// y un valor (value), retorna el indica (index) del cual su valor existe.
// Si encuentra ese Indice es porque existe, retornalo. 
// // En caso de que no existe ese indice en ese Array , retornalo -1 
    
function linearSearch(arr,val){
  
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            return i;
        }
    }

return -1;


}

console.log(linearSearch ([1,56,3,4,33,6,7,8,9,10],33));

console.log(linearSearch ([1,56,3,4,33,6,7,8,9,10],11));




let states = ["Colombia", "Argentina", "Peru", "Republica Dominicana", "Polonia"];

console.log(linearSearch(states,"Peru"));
