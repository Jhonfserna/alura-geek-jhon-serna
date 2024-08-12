import { servicesProducts } from "../services/product-services.js";


const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="img-container">
            <img src="${image}" class="imagen-producto" alt"${"productos comics"}">
        </div>

        <div class="card-container--info" data-id="${id}">
            <p>${name}</p>
            <div class="card-container--value">
                <p>$ ${price}</p>
                <button class="delete-button" id=${id} >
                    <img src="./assets/trash-icon.png" class="trash-icon"  alt="eliminar" data-delete>
                </button>
            </div>
        </div>    
    `;
    
    const deleteButton = card.querySelector("[data-delete]");
    deleteButton.addEventListener("click", (event) => {
        const productId = event.currentTarget.id;
        servicesProducts
            .deleteProduct(productId)
            .then(() => {
                card.remove();
            })
            .catch((error) => console.log(error));
    });
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();

        listProducts.forEach((product) => {
            const card = createCard(
                product.name,
                product.price,
                product.image,
                product.id
            );
            productContainer.appendChild(card);
        });
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts
        .createProducts(name, price, image)
        .then((res) => {
            const newCard = createCard(res.name, res.price, res.image, res.id);
            productContainer.appendChild(newCard);
        })
        .catch((err) => console.log(err));
});

render();



