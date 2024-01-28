var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Lio@09x41185xx",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  /*
    Database created
  */
  // con.query("CREATE DATABASE mydb", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  /*
    Table created
  */
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  /*
    Table created with Id
  */
  // var sql =
  //   "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  /*
    Add Id to existing id
  */
  // var sql =
  //   "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table altered");
  // });

  /*
    Insert a record in the "customers" table
  */
  // var sql =
  //   "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  /*
    Insert Multiple Records
  */
  // var sql = "INSERT INTO customers (name, address) VALUES ?";
  // var values = [
  //   ["John", "Highway 71"],
  //   ["Peter", "Lowstreet 4"],
  //   ["Amy", "Apple st 652"],
  //   ["Hannah", "Mountain 21"],
  //   ["Michael", "Valley 345"],
  //   ["Sandy", "Ocean blvd 2"],
  //   ["Betty", "Green Grass 1"],
  //   ["Richard", "Sky st 331"],
  //   ["Susan", "One way 98"],
  //   ["Vicky", "Yellow Garden 2"],
  //   ["Ben", "Park Lane 38"],
  //   ["William", "Central st 954"],
  //   ["Chuck", "Main Road 989"],
  //   ["Viola", "Sideway 1633"],
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });

  /*
    Selecting From a Table
  */
  // con.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  /*
    Selecting Columns
  */
  // con.query(
  //   "SELECT name, address FROM customers",
  //   function (err, result, fields) {
  //     if (err) throw err;
  //     console.log({ result });
  //   }
  // );

  /*
    The Fields Object
  */
  // con.query(
  //   "SELECT name, address FROM customers",
  //   function (err, result, fields) {
  //     if (err) throw err;
  //     console.log({ fields });
  //   }
  // );

  /*
    Select With a Filter
  */
  // con.query(
  //   "SELECT * FROM customers WHERE address = 'Park Lane 38'",
  //   function (err, result) {
  //     if (err) throw err;
  //     console.log({ result });
  //   }
  // );

  /*
    Wildcard Characters
  */
  // con.query(
  //   "SELECT * FROM customers WHERE address LIKE 'S%'",
  //   function (err, result) {
  //     if (err) throw err;
  //     console.log({ result });
  //   }
  // );

  /*
    Escaping Query Values
  */
  // var adr = "Mountain 21";
  // var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log({ result });
  // });

  // var sql = "SELECT * FROM customers WHERE address = ?";
  // con.query(sql, [adr], function (err, result) {
  //   if (err) throw err;
  //   console.log({ result });
  // });

  // Multiple Escaping Query Values
  var name = "Amy";
  var adr = "Mountain 21";
  var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log({ result });
  });
});
