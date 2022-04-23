const { encoding, keymap } = require("./constants");

let connection;

// setup input from the user
const setupInput = function (conn, name) {
  connection = conn(name);
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

  connection.write(keymap[key]);
};

module.exports = { setupInput };
