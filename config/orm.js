var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName, cb) {
		var command = "SELECT * FROM ??";
		connection.query(command, [tableName], function(error, response){
			if(error)
				throw error;
			cb(response);
		});
	},

	insertOne: function(tableName, columnName, columnValue, cb) {
		var command = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(command, [tableName, columnName, columnValue], function(error, response){
			if(error)
				throw error;
			cb(response);
		});
	},

	updateOne: function(tableName, columnName, columnValue, columnToUpdate, newValue, cb) {
		var command = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
		connection.query(command, [tableName, columnToUpdate, newValue, columnName, columnValue], function(error, response){
			if(error)
				throw error;
			cb(response);
		});
	},

	removeOne: function(tableName, columnName, columnValue, cb) {
		var command = "DELETE FROM ?? WHERE ?? = ?";
		connection.query(command, [tableName, columnName, columnValue], function(error, response){
			if(error)
				throw error;
			cb(response);
		});
	}
};

module.exports = orm;