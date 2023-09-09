import express from 'express';
import CarritoManager from './src/Carrito.js';
const router = express.Router();
const managerCarrito = new CarritoManager();


router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/api/carts', (req, res) => {
    managerCarrito.addCarrito();
    res.send({status:"succes", message: "Carrito Agregado"});

});

router.get('/api/carts/:cid',(req, res)=>{
    let idCarrito = req.params.cid;
    let carrito = managerCarrito.getCarritoByID(parseInt(idCarrito));
    if(!carrito) return res.send({error: "Carrito no encontrado"});
    res.send({carrito});
})

router.post('/api/carts/:cid/products/:pid', (req, res) => {
    let idCarrito = req.params.cid;
    let idProduct = req.params.pid;
    const data = req.body;
    managerCarrito.addProductToCarrito(parseInt(idCarrito), parseInt(idProduct), data);
    res.send({status:"succes", message: "Producto Agregado"});


});


export default router; 