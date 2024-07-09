import {saveProduct} from "./connection.api.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
        name: event.target.elements["name"].value,
        price: event.target.elements["price"].value,
        image: event.target.elements["image"].value
    }
    await saveProduct(JSON.stringify(data))
})
