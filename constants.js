// network config
const networkConfig = {
  host: "localhost",
  port: 50541,
};

// encoding config
const encoding = "utf8";

// keymap
const keymap = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",

  // send canned messages
  m: "Say: LET'S PLAY",
};

module.exports = { networkConfig, encoding, keymap };
