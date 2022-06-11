const EvenetEmitter = require("events");
const { setTimeout } = require("timers");

class MyEmitter extends EvenetEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    console.log("Please tuen off the motor!, Its a gentel reminder");
  }, 2000);
});

console.log("the script is running ");
console.log("the script is still running ");
myEmitter.emit("WaterFull");
