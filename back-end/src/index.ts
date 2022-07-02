import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('deu certo!');
});

app.listen(3000, () => {
  console.log('rodando na porta 3000');
});
