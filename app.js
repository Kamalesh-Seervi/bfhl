const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


// post response for the user data input
app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => typeof item === 'string' && item.length === 1 && /[a-zA-Z]/.test(item));
  const highest_alphabet = alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).pop();

  // Simulate some user-specific data
  const user_id = "john_doe_17091999";
  const email = "john@xyz.com";
  const roll_number = "ABCD123";
  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet: highest_alphabet ? [highest_alphabet] : [], 
  };
  res.json(response);
});



// this the get req from document just get response 

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: '1' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
