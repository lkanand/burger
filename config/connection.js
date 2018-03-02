var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 8889,
	user: "root",
	password: "root",
	database: "burgers_db"
	});
}

connection.connect(function(error){
	if(error)
		throw error;
});

module.exports = connection;