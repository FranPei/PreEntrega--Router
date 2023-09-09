import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import carritoRouter from './routes/carrito.js';
import productosRouter from './routes/productos.js';

app.use('/api/carrito', carritoRouter);
app.use('/api/productos', productosRouter);

const server = app.listen(8080, () => console.log("Escuchando el puerto 8080"));




