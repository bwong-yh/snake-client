const net = require("net");
const { networkConfig, encoding } = require("./constants");

// function to connect to the server
const connect = () => {
  const conn = net.createConnection(networkConfig);

  // convert all incoming data as utf8 text
  conn.setEncoding(encoding);

  conn.on("connect", () => {
    // message on first connection
    console.log("Connected to game server!");

    // display initials
    conn.write("Name: BW");
  });

  // message from server (disconnected because of idling)
  conn.on("data", message => {
    console.log(message);
  });

  return conn;
};

module.exports = { connect };
