const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "david123!",
  database: "ems"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;