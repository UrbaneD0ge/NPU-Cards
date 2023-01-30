const { application } = require('express');
const express = require('express');
const router = express.Router();
const NPU = require('../models/NPUs');

// GET /npu
router.get('/', async (req, res) => {
  const npu = await NPU.findOne({ NPU: req.query.NPU });
  res.render('_npu', { NPU: npu });
});

module.exports = router;