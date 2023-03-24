const express = require('express');

const GeralController = require('./controllers/GeralController');

const router = express.Router();

router.get('/', GeralController.home);

module.exports = router;