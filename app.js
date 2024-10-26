
const express = require('express');
const app = express();
const PORT = 3000;

// to parse JSON requests
app.use(express.json());

//list of users
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

// GET / get list of users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST / add user
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Validate user object
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // new ID for the user (auto-increment)
  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  // add the new user to the list
  users.push(newUser);

  // return the newly added user as the response
  res.status(201).json(newUser);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
