const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write('Name: AS');
    conn.write('Move: up');
  });

  conn.on("connect", () =>{
    setTimeout(()=>{
      conn.write('Move: up')
    }, 500); 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;