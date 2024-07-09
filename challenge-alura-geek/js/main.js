import {getProducts} from "./connection.api.js";
import "./create.product.js";
import renderProducts from "./render.product.js";

async function listProducts() {
    try {
        const products = await getProducts();
        renderProducts(products)
    } catch (error) {
        console.log(error)
    }
}

listProducts()
