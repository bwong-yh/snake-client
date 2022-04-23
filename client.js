const net = require("net");
const { networkConfig, encoding } = require("./constants");

// function to connect to the server
const connect = name => {
  const conn = net.createConnection(networkConfig);

  // econding can be changed in the constants.js file
  conn.setEncoding(encoding);

  conn.on("connect", () => {
    console.log("Connected to game server!");
    conn.write(`Name: ${name}`);
  });

  // message from server (disconnected because of idling)
  conn.on("data", message => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };
