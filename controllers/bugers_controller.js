var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {

  // var hbsObject = {};
  // res.render("index", hbsObject);
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/api/burgers", function(req, res) {

  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };

    res.json({burgers: data});
  });
});

router.post("/api/burgers", function(req, res) {
  console.log('reached in post controller');
  //var devoured = req.body.devoured ? req.body.devoured : false;
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 
    req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//});

// Export routes for server.js to use.
module.exports = router;