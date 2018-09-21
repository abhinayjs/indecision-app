'use strict';

//arguments object is no longer bound to arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

//throws error because arguments object cannot be accessed in arrow functions
// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

console.log(add(1, 1));

//this keyword is no longer bound to arrow functions

var user = {
    name: 'Abhinay',
    cities: ['New York', 'Columbia', 'Hyderabad'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // console.log(this.name);
        // console.log(this.cities);
        // this.cities.forEach(function (city) { -- anonymous functions cannot access this
        //     console.log(this.name + ' has lived in ' + city)
        // });

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 5, 8, 4],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
