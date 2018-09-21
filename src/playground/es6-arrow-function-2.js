//arguments object is no longer bound to arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

//throws error because arguments object cannot be accessed in arrow functions
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

console.log(add(1,1));


//this keyword is no longer bound to arrow functions

const user = {
    name : 'Abhinay',
    cities : ['New York', 'Columbia', 'Hyderabad'],
    printPlacesLived : function() {
        // console.log(this.name);
        // console.log(this.cities);
        // this.cities.forEach(function (city) { -- anonymous functions cannot access this
        //     console.log(this.name + ' has lived in ' + city)
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [2,5,8,4],
    multiplyBy : 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());