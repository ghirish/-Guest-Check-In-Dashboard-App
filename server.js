// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = 8383;

// =========================
// In-memory storage for guest names
let guests = ['Ghirish']; // Default guest (you can start empty if you want)

// =========================
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// =========================
// Routes

// Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Dashboard Page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API: Fetch all guests
app.get('/api/guests', (req, res) => {
  res.status(200).json(guests);
});

// API: Add a new guest
app.post('/api/guests', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Guest name is required and must be a string.' });
  }
  guests.push(name);
  res.sendStatus(201); // Created
});

// API: Remove the most recent guest
app.delete('/api/guests', (req, res) => {
  if (guests.length === 0) {
    return res.status(404).json({ error: 'No guests to remove.' });
  }
  guests.pop();
  res.sendStatus(200); // OK
});

// =========================
// Start Server
app.listen(PORT, () => {
  console.log(`✅ Guest Check-In App running at http://localhost:${PORT}`);
});
