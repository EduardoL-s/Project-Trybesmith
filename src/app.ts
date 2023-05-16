import express from 'express';
import { productsRouter, usersRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;
