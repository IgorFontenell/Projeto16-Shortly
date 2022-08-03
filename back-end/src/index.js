import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const server = express(); // Cria o servidor.
server.use(express.json()); // Torna legível os dados recebidos.
server.use(cors()); // Permite o acesso de outras portas ao código rodando.

// Configura que função será executada quando um GET bater na rota "/".
server.get("/", (request, response) => {
  
  // Manda como resposta um Hello World.
  response.send("Hello World");

});

server.listen(process.env.PORT, () => console.log("Servidor rodando na porta " + process.env.PORT)); // Configura o servidor para rodar na porta 4000 da minha máquina.'