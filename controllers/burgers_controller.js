var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

module.exports = router;

router.get("/", function(req, res){
	burger.allBurgers(function(response){
		arrayOfBurgers = response;
		var data = {
			burgers: arrayOfBurgers
		};
		res.render("index", data);
	});
});

router.post("/", function(req, res){
	var newBurger = req.body;
	burger.insertBurger(newBurger.name);
	res.end();
});

router.put("/", function(req, res){
	var updatedBurger = req.body;
	burger.updateBurger(updatedBurger.id);
	res.end();
});

router.delete("/", function(req, res){
	var deletedBurger = req.body;
	burger.removeBurger(deletedBurger.id);
	res.end();
});

router.put("/newburger", function(req, res){
	var updatedBurger = req.body;
	burger.undevourBurger(updatedBurger.id);
	res.end();
});

module.exports = router;

