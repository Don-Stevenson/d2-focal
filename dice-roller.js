// code that takes in arguments from the command line for how many dice are rolled prints that number and the result of that many rolls

let numberOfDice = process.argv.slice(2).join();

let rollResult = "";
for (let i = 0; i < numberOfDice; i++) {
  rollResult += Math.floor(Math.random() * 7);
}
rollResult = rollResult.split('').join(", ");
console.log(`Rolled ${numberOfDice} dice and the result are/is: ${rollResult}`);