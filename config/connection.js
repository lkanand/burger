var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 8889,
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(error){
	if(error)
		throw error;
});

module.exports = connection;