// Coffee example
var walletAmount = 4.99;
var coffeePrice = 3.99;

if(walletAmount >= coffeePrice) {
    console.log('You have enough money for coffee!');
} else {
    console.log('You are too skint for coffee!');
}

// Railcard example
var age = 25;

if(age >= 16 && age < 25) {
    console.log('You can buy a railcard');
} else if(age === 25) {
    console.log('you can still use your card but cannot buy a new one.');
} else {
    console.log('You are either too old or too young');
}


// Favourite colour example
var colour = 'red';
if(colour == 'blue') {
    console.log('Users favourite colour is blue!');
} else if(colour == 'red') {
    console.log('Users favourite colour is red!');
} else {
    console.log('I have no clue.');
}