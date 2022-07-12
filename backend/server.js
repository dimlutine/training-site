const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const sitename = 'Training Site';

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({ message: `Welcome to the ${sitename} API` });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
