let connection;

// setup input from the user
const setupInput = function (conn) {
  connection = conn();
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

  switch (key) {
    case "w":
      connection.write("Move: up");
      return;
    case "a":
      connection.write("Move: left");
      return;
    case "s":
      connection.write("Move: down");
      return;
    case "d":
      connection.write("Move: right");
      return;
  }
};

module.exports = { setupInput };
