const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mongo=require("mongoose");

//intenzivna
router.get('/intenzivna', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    
    
    
    mongo.connect(url, function(err, db) {
  
      var cursor = db.collection('kreveti').find( {odjel:"intenzivna"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log("RADI!!");
        res.render('intenzivna', {items: resultArray});
       });
    });
});

  
  module.exports = router;