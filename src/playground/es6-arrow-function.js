const sqaure = function (x) {
    return x * x;
}

//ES6 arrwo functions are always anonymous
const sqaureArrow = (x) => {
    return x * x;    
};
console.log(sqaure(8))
console.log(sqaureArrow(9))

//Arrow function expressions

const squareArrowTwo = (x) => x * x;

console.log(sqaureArrow(3))

const firstName = (fullName) => {
    return fullName.split(' ')[0]
};

console.log('First Name: ', firstName('Abhinay JS'))

const firstNameShort = (fullName) => fullName.split(' ')[0];

console.log('First Name: ', firstNameShort('Abhinay JS'))