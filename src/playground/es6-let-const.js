var nameVar = 'Abhinay';
var nameVar = 'JS' //can declare the same variable
console.log('nameVar', nameVar);

let nameLet = 'Tony';
nameLet = 'Stark'; //cannnot re-declare the same variablke but can re-assign a different value
console.log('nameLet', nameLet);

const nameConst = 'Peter'; //cannot redefine or reassign
//nameConst = 'Parker';
console.log('nameConst', nameConst);

//Scoping
//var, let and const based variables are function scoped.
//Let and Const are block scoped too

var fullName = 'Abhinay JS';

if (fullName){
    var firstName = fullName.split(' ')[0]
    //const firstName = fullName.split(' ')[0] -- throws error
    console.log(firstName)
}

console.log(firstName)
