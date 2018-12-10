// Simple function
function simpleFunction() {
    console.log('This is a simple function. Call me!');
}
simpleFunction();

// Passing an argument to a function
// Simple function
function simpleFunctionWithAnArg(name) {
    console.log('Hey there,', name);
}
simpleFunctionWithAnArg('Aaron');

// Function with multiple arguments
function add(value1, value2) {
    console.log(value1 + value2);
}
add(100,30);

// Reusing functions!
// If isUserLoggedIn is true, we will log information in below functions.
// If isUserLoggedIn is false, we do not log anything!
var isUserLoggedIn = true;

// In a real-world application, this function would be much more complicated!
function checkIfUserIsLoggedIn() {
    if(isUserLoggedIn) {
        return true;
    }
}

function showUsername() {
    if(checkIfUserIsLoggedIn()) {
        console.log('aaronwelsh');
    }
}

function showEmail() {
    if(checkIfUserIsLoggedIn()) {
        console.log('aaron@queryclick.com');
    }
}

function showPassword() {
    if(checkIfUserIsLoggedIn()) {
        console.log('adbhjadad9331h3hd');
    }
}

function showProfile() {
    showUsername();
    showPassword();
    showEmail();
}
showProfile();

