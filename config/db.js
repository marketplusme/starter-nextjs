//const { createPool } = require("mysql");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack_db",
});

con.connect((err) => {
  if (err) {
    console.log("error connecting to db...");
  }
  console.log("connected to db...");
});

const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      con.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
