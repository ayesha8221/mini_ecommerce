import mysql from "mysql2";

const con = mysql.createConnection({
  host: "bz7euxaqesnez3zdbxlo-mysql.services.clever-cloud.com",
  user: "uviblsf9ix1jtt6d",
  password: "OcXPpKaFcw4T82BSTAb9",
  database : "bz7euxaqesnez3zdbxlo",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("select * from products", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

export default con;