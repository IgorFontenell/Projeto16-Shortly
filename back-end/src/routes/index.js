import { Router } from 'express';
import signRouter from './signRouter.js';

const router = Router();

router.use(signRouter);

export default router;