var express = require("express");
var router = express.Router();
var db = require("../models")

//get route to index
router.get("/", function(req, res) {
	// console.log("router.get req : ");
	// console.log(req);
	// console.log("router.get res : ");
	// console.log(res);
	db.Burger.findAll({}).then(function(burger_data) {
		// console.log("router.get burger.all cb data: ")
		// console.log(data);
		// var hbsObject = {
		// 	burger_data: dbBurger
		// };
		// console.log(hbsObject);
		res.render("index", {burger_data});
	});
});

router.post("/burgers/create", function(req,res) {
	console.log(req.body.burger_name);		
	db.Burger.create({
    	burger_name: req.body.burger_name,
    	devoured: req.body.devoured
    }).then(function(dbBurger) {
      // We have access to the new todo as an argument inside of the callback function
    	res.redirect("/");
	});
});

router.put("/burgers/update", function(req, res) {
	 // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    // var myJSON = JSON.parse(req.body.id);
    console.log("req:");
    console.log(req.body.burger_id);
    db.Burger.update({
       	devoured: true
    }, {
    	where: {
    	id: req.body.burger_id
    }
    }).then(function(dbBurger) {
		res.redirect("/");
	});
});

module.exports = router;