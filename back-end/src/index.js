import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const server = express(); // Cria o servidor.
server.use(express.json()); // Torna legível os dados recebidos.
server.use(cors()); // Permite o acesso de outras portas ao código rodando.

server.use(router);


server.listen(process.env.PORT, () => console.log("Servidor rodando na porta " + process.env.PORT)); // Configura o servidor para rodar na porta 4000 da minha máquina.'