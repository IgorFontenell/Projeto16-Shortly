import { Router } from 'express';
import { createUser, loginUser } from '../controllers/signController.js';
import { signInValidator, signUpValidator } from '../middlewares/signValidator.js';

const signRouter = Router();


signRouter.post("/signup", signUpValidator, createUser);
signRouter.post("/signin", signInValidator, loginUser);

export default signRouter;