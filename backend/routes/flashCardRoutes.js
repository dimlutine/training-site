const express = require('express');
const router = express.Router();
const { registerFlashCard } = require('../controllers/flashCardController');

router.post('/', registerFlashCard);

// router.post('/login', loginUser);

module.exports = router;
