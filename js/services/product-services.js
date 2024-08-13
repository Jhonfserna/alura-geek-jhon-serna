const productList = () => {
    return fetch("https://my-json-server.typicode.com/Jhonfserna/alura-geek-api/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (name, price, image) => {
    return fetch("https://my-json-server.typicode.com/Jhonfserna/alura-geek-api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        }),
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));

};

// eliminar una tarjeta:

const deleteProduct = (id) => {
    return fetch(`https://my-json-server.typicode.com/Jhonfserna/alura-geek-api/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};


export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,

};