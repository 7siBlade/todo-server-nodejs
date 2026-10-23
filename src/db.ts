import { CreateTaskRequst, Task, UpdateTaskRequst } from './types';

let idCounter = 0;
const tasks: Task[] = [];

export const create = (body: CreateTaskRequst): Task => {
  const task = {
    id: idCounter,
    text: body.text,
    done: false,
  };

  idCounter++;
  tasks.push(task);
  return task;
};

export const read = () => {
  return tasks;
};

export const update = (id: number, body: UpdateTaskRequst): Task | null => {
  const task = tasks.find((one) => one.id == id);
  if (task) {
    task.text = body.text;
    task.done = body.done;
    return task;
  } else {
    return null;
  }
};

export const deleteOne = (id: number): void => {
  const index = tasks.findIndex((one) => one.id === id);
  if (index >= 0) {
    tasks.splice(index, 1);
  }
};
