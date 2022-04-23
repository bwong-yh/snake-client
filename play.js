const readline = require("readline");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting to server...");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name;

rl.question("What's your initials? (max. 3 letters) ", initials => {
  name = initials ? initials : "???";
  rl.close();
});

rl.on("close", () => {
  setupInput(connect, name);
});
