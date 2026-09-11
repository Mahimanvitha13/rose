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


 - instead of that 

 function execute(operation) {
      operation();
 }
 execute(add);
 execute(subtract);

