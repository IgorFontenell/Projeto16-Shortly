import { Router } from 'express';
import { getUserUrls, getRankings } from "../controllers/infosController.js";

const infoRouter = Router();

infoRouter.get("/users/me", getUserUrls);
infoRouter.get("/ranking", getRankings);

export default infoRouter;