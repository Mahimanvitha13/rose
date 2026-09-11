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
 function doAdd() { //It is repetative process for Add
      add();
 }
 function doSubtract() { //It is repetative process for Sub
      subtract();
 }

 function execute(operation) {
      operation();
 }
 execute(add);
 execute(subtract);

