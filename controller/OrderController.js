import express from 'express'
import bodyParser from 'body-parser'
import { orders as cart } from '../model/index.js'

const orderRouter = express.Router()

orderRouter.use(bodyParser.json())


orderRouter.get('/:userID', (req, res) => {
    cart.fetchCart(req.params.userID, res);
});

orderRouter.post('/addToCart', (req, res) => {
    const { prodID, userID } = req.query;
    cart.addToCart(prodID, userID, res);
});

orderRouter.delete('/deleteFromCart', (req, res) => {
    const { prodID, userID } = req.query;
    cart.deleteFromCart(prodID, userID, res);
});


// orderRouter.get('/', (req, res) => {
//     cart. fetchCart(req, res)
// })


// orderRouter.get('/:id', (req, res) => {
//     cart.itemsInCart(req, res)
// })

// orderRouter.post('/add', (req, res) => {
//     cart.addToCart(req, res)
// })

// orderRouter.delete('/:id', (req, res) => {
//     cart.deleteFromCart(req, res)
// })


export {
    orderRouter
}


// import express from "express";
// import bodyParser from "body-parser";
// import { orders } from "../model/index.js";
// // import { verifyAToken } from '../middleware/AuthenticateUser.js'

// const orderRouter = express.Router();

// orderRouter.use(bodyParser.json());
// // verifyAToken,
// orderRouter.get("/", (req, res) => {
//   orders.fetchOrders(req, res);
// });

// orderRouter.get("/recent", (req, res) => {
//   orders.recentOrders(req, res);
// });
// // verifyAToken,
// orderRouter.get("/:id", (req, res) => {
//   orders.fetchOrder(req, res);
// });
// // verifyAToken,
// orderRouter.post("/add", (req, res) => {
//   orders.addOrder(req, res);
// });
// // verifyAToken,
// orderRouter.patch("/:id", (req, res) => {
//   orders.updateOrder(req, res);
// });
// // verifyAToken,
// orderRouter.delete("/:id", (req, res) => {
//   orders.deleteOrder(req, res);
// });

// export { orderRouter };

