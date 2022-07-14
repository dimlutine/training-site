const asyncHandler = require('express-async-handler');

const FlashCard = require('../models/flashCardModel');

// @desc Register a flashcard
// @route /api/flashcards
// @access Public
const registerFlashCard = asyncHandler(async (req, res) => {
  const { category, question, answer } = req.body;

  //Validation
  if (!category || !question || !answer) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  //Find if card already exists
  const questionExists = await FlashCard.findOne({ question });
  const categoryExists = await FlashCard.findOne({ category });

  if (questionExists && categoryExists) {
    res.status(400);
    throw new Error('Flashcard already exists');
  }

  //Create flashcard
  const flashCard = await FlashCard.create({
    category,
    question,
    answer,
  });

  if (flashCard) {
    res.status(201).json({
      _id: flashCard._id,
      category: flashCard.category,
      question: flashCard.question,
      answer: flashCard.answer,
    });
  } else {
    res.status(400);
    throw new Error('Invalid flashcard data');
  }
});

module.exports = {
  registerFlashCard,
};
