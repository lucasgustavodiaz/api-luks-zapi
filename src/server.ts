import express from 'express';

import dotenv from 'dotenv';
import handlers from './routes/index';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler';

const server = express();

const PORT = process.env.PORT || 5000;

//Load ENV vars
dotenv.config();

//Cors enable
server.use(cors());

//usamos el middleware para parsear json en el body
server.use(express.json());

//Morgan
server.use(morgan('combined'));

//Routes
server.use('/api/v1', handlers);

//Handler Errors
server.use(errorHandler);

server.get('/', (req, res) => {
  res.json({ message: 'Deberias iniciar los request en /api/v1/<entidad>' });
});

server.listen(PORT, () => {
  console.log(`Sevidor en http://localhost:${PORT}`);
});
