import { deleteProduct } from "./connection.api.js";

const container = document.querySelector('[data-card]');
function createProductHTML(product) {
    return `
    <li class="products-cards__items" data-id="${product.id}">
        <div class="products-cards__items--img">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <h3 class="products-cards__items--title">${product.name}</h3>
        <div class="products-cards__items--price">
            <p>$ ${product.price}</p>
            <div class="products-cards__actions">
                <img src="./img/icon_delete.png" alt="Delete Product" class="products-cards__actions--delete">
            </div>
        </div>
    </li>
    `;
}

export default function renderProducts(products) {
    container.innerHTML = '';
    let ul = document.createElement('ul');
    ul.classList.add('products-cards');

    products.forEach((product, index) => {
        if (index > 0 && index % 3 === 0) {
            container.appendChild(ul);
            ul = document.createElement('ul');
            ul.classList.add('products-cards');
        }
        ul.innerHTML += createProductHTML(product);
    });

    if (ul.children.length > 0) {
        container.appendChild(ul);
    }

    document.querySelectorAll('.products-cards__actions--delete').forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault()
            const productId = this.closest('.products-cards__items').dataset.id;
            clearProduct(productId, products);
        });
    });
}

function clearProduct(id, products) {
    const productIndex = products.findIndex(product => product.id == id);
    if (productIndex !== -1) {
        deleteProduct(id)
        products.splice(productIndex, 1);
        renderProducts(products);
    }
}
