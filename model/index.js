import { Users } from "./Users.js";
import { Orders } from "./Orders.js";
import { Products } from "./Products.js";

const users = new Users()
const products = new Products()
const orders = new Orders()

export { 
    users,
    products,
    orders
}