import { Router } from 'express';
import { createUser } from '../controllers/signController.js';

const signRouter = Router();



signRouter.post("/signup", createUser);

export default signRouter;