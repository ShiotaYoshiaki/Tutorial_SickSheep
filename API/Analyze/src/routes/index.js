import express from 'express';
import analyze from './analyze';

const router = express.Router();

router.get('/sample/:params?', analyze);

module.exports = router;

