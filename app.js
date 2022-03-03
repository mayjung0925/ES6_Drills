//1.Template Literals and Default Parameters Value
// function favMovie( name= 'Tommy Wiseau',movie = 'Room'){
//     console.log(`My name is ${name}.  My favorite movie is ${movie}.`)
// }

// favMovie();

// favMovie('Jenna','Encanto')

//2.Arrow Functions

// let favMovie = (name= 'Tommy Wiseau',movie = 'Room')=>{
//     console.log(`My name is ${name}.  My favorite movie is ${movie}.`);
// };

//2. Arrow Functions ->consise body
let favMovie = (name= 'Tommy Wiseau',movie = 'Room')=> console.log(`My name is ${name}.  My favorite movie is ${movie}.`);
    

favMovie();

let getFirstName = fullName=>{
    let nameArr = fullName.split(" ")
    console.log( nameArr[0]); 

}

let getFirstNameConsise = fullName =>   console.log(fullName);

getFirstName('Lannie Kim');
getFirstNameConsise('Jenna kim');

let doMath = (val1,val2)=>{
    return {
        exponent : val1**val2,
        product : val1 * val2
    };

};

console.log(doMath( 10, 2 ));

//3.Spread Syntax

let arr= ['Paul', 'Birmingham','Kimchi'];

function myFunc (name, location ,  favFood){
    console.log(`${name}, ${location}, ${favFood}`)
}

myFunc();
myFunc(...arr);

let myName = 'Eunjin Jeong';

function myFunc2(value){
    let newVariable = [...value];
    for (let i= 0 ; i<newVariable.length ;i++){
    console.log(newVariable[i])
    }

};

myFunc2(myName);

