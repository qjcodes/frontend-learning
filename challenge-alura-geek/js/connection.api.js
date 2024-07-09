const url_api = "http://localhost:3000/products";

// GET
async function getProducts() {
    const products = await fetch(url_api);
    const result = await products.json();
    return result;
}

// POST
async function saveProduct(data) {
    const product = await fetch(url_api, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: data
    });
    const result = await product.json();
    return result;
}

// DELETE
async function deleteProduct(id) {
    await fetch(`${url_api}/${id}`, {method: "DELETE"})
}

export {
    getProducts,
    saveProduct,
    deleteProduct
};
