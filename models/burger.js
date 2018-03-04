var orm = require("../config/orm.js");

var burger = {
	allBurgers: function(cb){
		return orm.selectAll("burgers", function(response){
			console.log(response);
			cb(response);
		});
	},

	insertBurger: function(newBurger){
		orm.insertOne("burgers", "burger_name", newBurger, function(response){
			console.log(response);
		});
	},

	updateBurger: function(burgerID){
		orm.updateOne("burgers", "id", burgerID, "devoured", true, function(response){
			console.log(response);
		});
	},

	removeBurger: function(burgerID){
		orm.removeOne("burgers", "id", burgerID, function(response){
			console.log(response);
		});
	},

	undevourBurger: function(burgerID){
		orm.updateOne("burgers", "id", burgerID, "devoured", false, function(response){
			console.log(response);
		});
	}
};

module.exports = burger;