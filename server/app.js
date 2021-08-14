// Server production build locally

const path = require('path');
const express = require('express');

const PUBLIC_DIR = path.join(__dirname, process.env.PUBLIC_PATH || 'public');
const PORT = 8080;
const app = express();

const RateLimit = require('express-rate-limit');
const limiter = new RateLimit({
  windowMs: 3 * 1000,
  max: 150,
});

app.use(limiter);

app.use(express.static(PUBLIC_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => console.log(`Server is up and running on ${PORT} port...`));
