const { encoding, keymap } = require("./constants");

let connection;

// setup input from the user
const setupInput = function (conn) {
  connection = conn();
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding(encoding);
  stdin.resume();

  stdin.on("data", key => handleInput(key));

  return stdin;
};

// handle input from the user
const handleInput = function (key) {
  if (key === "\u0003") process.exit();

  if (key === "\u000D") {
    connection.write("Say: LET'S PLAY");
  } else {
    connection.write(keymap[key]);
  }
};

module.exports = { setupInput };
