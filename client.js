const net = require("net");

// function to connect to the server
const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // convert all incoming data as utf8 text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // message on first connection
    console.log("Connected to game server!");

    // display initials
    conn.write("Name: BW");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
  });

  // message from server (disconnected because of idling)
  conn.on("data", data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
