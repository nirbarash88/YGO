const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // For parsing JSON data

// Sample players data
const players = [
  { name: 'Suli', win: 3, loss: 1, draw: 0, attendance: 1 },
  { name: 'Nir', win: 3, loss: 1, draw: 0, attendance: 1 },
  { name: 'Nadav', win: 4, loss: 0, draw: 0, attendance: 1 }
];

// Route to fetch players data
app.get('/players', (req, res) => {
  res.json(players);
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
