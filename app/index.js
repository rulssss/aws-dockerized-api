const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "dev";

// middleware simple para logs estructurados
app.use((req, res, next) => {
  console.log(JSON.stringify({
    method: req.method,
    path: req.path,
    timestamp: new Date().toISOString()
  }));
  next();
});

// healthcheck (clave en cloud)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "ok",
    env: ENV
  });
});

// endpoint base
app.get('/', (req, res) => {
  res.json({
    message: "API running 🚀",
    env: ENV
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});