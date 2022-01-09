const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "I_Loveme1!",
  database: "employee_manager",
});
connection.connect();
module.exports = connection;
