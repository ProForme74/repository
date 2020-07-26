const express = require('express');
const mongo=require("mongoose");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var assert = require('assert');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>{
    console.log("DASH PROVJERA");
    res.render('dashboard', {
      user: req.user,
      
    })
  }
);

// Insert osoba
router.post('/insert', function(req, res, next) {
  const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
  console.log("INSERT PROVJERA");
  var item = {
    ime: req.body.ime,
    titula: req.body.titula,
    zavod: req.body.zavod
  };
  
  mongo.connect(url, function(err, db) {
    
    
    db.collection('user-data').insertOne(item, function(err, result) {
      
      console.log('Item inserted');
      
    });
  });
  
  res.render('unos');
  
  });

  // Insert krevet
    router.post('/krevet', function(req, res, next) {
      console.log("KREVET");
      const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
      
      var item = req.body.krevet;
      var status=req.body.status;
      console.log(status);
      if (status=="zauzet") {
        mongo.connect(url, function(err, db) {
        
          db.collection('kreveti').update({šifra: item}, 
            {
            $set: {
              status: true
              }
            }
            );
            res.render('dashboard', { user: ""});
        });
      }else{
        mongo.connect(url, function(err, db) {
        
          db.collection('kreveti').update({šifra: item}, 
            {
            $set: {
              status: false
              }
            }
            );
            res.render('dashboard', { user: ""});
        });
      }
      
      
    });


  

  router.post('/unos', ensureAuthenticated, (req, res) =>{
    
    res.render('unos', {
      
    })
  }
  );
module.exports = router;


