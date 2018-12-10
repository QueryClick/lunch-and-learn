var name = 'Aaron'; // Data type String 

var age = 25; // Data type Number

var employed = true; // Data type Boolean

var location = undefined; // No value has been assigned to this variable. It is undefined.

var goals = null; // Useful if an object is expected for this variable, but no object was assiged.

// Data type Object
var car = {
    make: 'Citroen',
    model: 'DS3',
    colour: 'Black',
    seats: 5 
};

// Array
var cars = ['Citroen', 'Ford', 'Chevrolet'];

// Array of objects
var allCars = [
    {
        make: 'Citroen',
        model: 'DS3',
        colour: 'Black',
        seats: 5 
    },
    {
        make: 'Ford',
        model: 'Focus',
        colour: 'Red',
        seats: 5
    },
    {
        make: 'Chevrolet',
        model: 'Cruze',
        colour: 'Blue',
        seats: 4
    }
];

console.log(allCars);
