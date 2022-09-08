// route for NPU

var express = require('express');
var router = express.Router();
var request = require('request');
var mongoose = require('mongoose');
var Npu = require('../models/npu.js');

// GET /npu
router.get('/', function (req, res, next) {
  res.render('npu', { title: 'NPU' });
});

