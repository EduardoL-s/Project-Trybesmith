import express from 'express';
import { ordersRouter, productsRouter, usersRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
