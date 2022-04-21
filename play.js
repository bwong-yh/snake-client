const net = require("net");

// function to connect to the server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // convert all incoming data as utf8 text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting to server...");

connect();
