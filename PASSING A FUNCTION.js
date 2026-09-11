//Passing a Function into Another Function
function sayHello() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(sayHello);
function add() {
    console.log("Adding");
}

function subtract() {
    console.log("Subtracting");
}

function execute(operation) {
    operation();
}

execute(add);
execute(subtract);