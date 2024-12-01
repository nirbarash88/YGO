const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors'); // Add this line at the top
app.use(cors()); // This line allows React to talk to Express

app.get('/', (req, res) => {
    res.send('Hello, this is my server!');
});

app.get('/players', (req, res) => {
    res.json([
        { name: 'Suli', win: 3 , loss:1 , draw: 0, attendance: 1 },
        { name: 'Nir', win: 3 , loss:1 , draw: 0, attendance: 1 },
        { name: 'Nadav', win: 4 , loss:0 , draw: 0, attendance: 1 }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

