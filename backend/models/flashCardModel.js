const mongoose = require('mongoose');

const flashCardSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Please add a category'],
    },
    question: {
      type: String,
      required: [true, 'Enter a question'],
      unique: true,
    },
    answer: {
      type: String,
      required: [true, 'Enter the answer to your question'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FlashCard', flashCardSchema);
