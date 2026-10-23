import express from 'express';
import { create, read, update, deleteOne } from './db';
import { PORT } from './config';

const server = express();
server.use(express.json());

//Create
server.post('/', (request, response) => {
  const task = create(request.body);
  response.status(201).send(task);
});

//Read
server.get('/', (request, response) => {
  const task = read();
  response.status(200).send(task);
});

//Update
server.put('/:id', (request, response) => {
  const task = update(+request.params.id, request.body);
  if (task === null) {
    response.status(404).send('Task not found');
  }
  response.status(200).send(task);
});

//Delete
server.delete('/:id', (request, respons) => {
  deleteOne(+request.params.id);
  respons.sendStatus(205);
});
server.listen(PORT);
