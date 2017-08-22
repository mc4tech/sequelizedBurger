var express = require("express");
var router = express.Router();
var burger = require("../models/burger")

//get route to index
router.get("/", function(req, res) {
	// console.log("router.get req : ");
	// console.log(req);
	// console.log("router.get res : ");
	// console.log(res);
	burger.all(function(data) {
		// console.log("router.get burger.all cb data: ")
		// console.log(data);
		var hbsObject = {
			burger_data: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req,res) {
	// console.log("router.post req : ");
	// console.log(req);
	// console.log("router.post res : ");
	// console.log(res);
	if(req.body.burger_name === "" || undefined) {
		console.log("must enter at least one char");
	}else {
		burger.create(req.body.burger_name, function(data) {
			console.log("router.post burger.create cb data: ")
			console.log(data);
			res.redirect("/");
		});
	}
});

router.put("/burgers/update", function(req, res) {
	// console.log("router.put req : ");
	// console.log(req);
	// console.log("router.put res : ");
	// console.log(res);
	console.log("req.body.burger_id");
	console.log(req.body.burger_id);
	burger.update(req.body.burger_id, function(data) {
		console.log("router.put burger.create cb data: ")
		console.log(data);
		res.redirect("/");
	});
});

module.exports = router;