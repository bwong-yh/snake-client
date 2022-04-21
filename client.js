const net = require("net");

// function to connect to the server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // convert all incoming data as utf8 text
  conn.setEncoding("utf8");

  // log at first connection
  conn.on("connect", () => {
    console.log("Connected!");
  });

  // idle message from server
  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
