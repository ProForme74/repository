const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mongo=require("mongoose");

// //kirurgija
router.get('/kirurgija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"kirurgija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });dacccwww
  
  //ortopedija
  router.get('/ortopedija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"ortopedija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  //radiologija
  router.get('/radiologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"radiologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  //pulmonologija
  router.get('/pulmonologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"pulmonologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  //endokrinologija
  router.get('/endokrinologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"endokrinologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  //urologija
  router.get('/urologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"urologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  //otorinolaringologija
  router.get('/otorinolaringologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"otorinolaringologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  //dermatologija
  router.get('/dermatologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"dermatologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  //kardiologija
  router.get('/kardiologija', (req, res) => {
    const url="mongodb+srv://martina:martina123@clusterbolnica-elxoi.mongodb.net/test?retryWrites=true&w=majority";
    var resultArray = [];
    mongo.connect(url, function(err, db) {
      
      var cursor = db.collection('user-data').find( {zavod:"kardiologija"});
      cursor.forEach(function(doc, err) {
        
        resultArray.push(doc);
      }, function() {
        console.log(resultArray);
        res.render('zavod', {items: resultArray});
       });
    });
  });
  
  
  module.exports = router;