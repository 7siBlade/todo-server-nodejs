import express from 'express';
import { PORT } from './config';
import { cardsRouter } from './routers/cards.router';

const server = express();
server.use('/cards', cardsRouter);


server.listen(PORT);
