const { connect } = require("./client");

console.log("Connecting to server...");

// setup input from the user
const setupInput = function () {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => handleInput(key));

  return stdin;
};

// handle input from the user
const handleInput = function (key) {
  if (key === "\u0003") process.exit();

  console.log(key);
};

setupInput();

connect();
