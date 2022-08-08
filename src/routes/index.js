import { Router } from 'express';
import infoRouter from './infosRouter.js';
import signRouter from './signRouter.js';
import urlsRouter from './urlsRouter.js';


const router = Router();

router.use(signRouter);
router.use(urlsRouter);
router.use(infoRouter);

export default router;