import 'reflect-metadata';
import express from 'express';

import './database/connect'
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import stockRoutes from './routes/stockRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/stock', stockRoutes);
app.listen(3000, () => console.log("Ouvindo na 3000"));