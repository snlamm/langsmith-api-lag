import express from 'express';
import { getRuns } from './getRun.js';

/**
 * Router for /runs
 */
export const getRouter = (): express.Router => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const runs = await getRuns();

    res.json({
      results: runs,
    });
  });

  return router;
};
