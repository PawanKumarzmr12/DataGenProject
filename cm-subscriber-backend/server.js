const express = require('express');
const app = express();
const cors = require('cors'); // Import the CORS package
const port = 4000;


// Use CORS middleware to allow requests from other origins (like frontend)
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());


// POST route to handle creating a subscriber
app.post('/create-subscriber', (req, res) => {
    const { name, email } = req.body;
    console.log(`Subscriber created: ${name}, ${email}`);
    res.status(201).json({
      message: 'Subscriber created successfully',
      subscriber: { name, email }
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
