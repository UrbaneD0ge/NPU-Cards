const { application } = require('express');
const express = require('express');
const router = express.Router();
const NPU = require('../models/NPUs');

// GET /npu
router.get('/', async (req, res) => {

  res.render('npu', { NPU: NPU });
});

module.exports = router;