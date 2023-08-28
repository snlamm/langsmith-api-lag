import express from 'express';
import 'dotenv/config.js';
import { getRouter as runsRouter } from './services/runs/router.js';

const app = express();
const port = 3002;

// use JSON to pass data around
app.use(express.json());

app.use('/runs', runsRouter());

app.get('/ping', (req, res) => res.json('pong'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
