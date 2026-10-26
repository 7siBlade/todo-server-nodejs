import { Database } from 'sqlite3';
import { SQLITE_PATH } from '../config';

const db = new Database(SQLITE_PATH, (error) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  console.log('Database connected');
});

export const sqLiteRun = (sql: string, promes?: unknown[]): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    db.run(sql, promes, (error: unknown, data: unknown) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    })
  });
}

export const sqLiteGet = (sql: string, promes?: unknown[]): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    db.get(sql, promes, (error: unknown, data: unknown) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
};

export const sqLiteAll = (sql: string, promes?: unknown[]): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    db.all(sql, promes, (error: unknown, data: unknown) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
};