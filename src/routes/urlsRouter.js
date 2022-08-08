import { Router } from 'express';
import { getingUrlById, getingUrlByShortUrl, shortingUrl, deletingUrl } from '../controllers/urlsController.js';
import { urlValidator } from '../middlewares/urlValidator.js';


const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlValidator, shortingUrl);
urlsRouter.get("/urls/:id", getingUrlById);
urlsRouter.get("/urls/open/:shortUrl", getingUrlByShortUrl);
urlsRouter.delete("/urls/:id", deletingUrl);

export default urlsRouter;