/**
 * 1. request con método GET, sin header sin query params
 */
const getUsers = async () => {
  const URL_USERS = "https://reqres.in/api/users";

  //el metodo HTTP por defceto es GET (en caso no se especifique)
  /*const response = await fetch(URL_USERS, {
        method: "GET",
        headers: {},
        body: {}, // bodno no funciona con GET
    });*/
  const response = await fetch(URL_USERS, {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log("getUsers: ", data);
};

/**
 * 2. request con método GET, sin header con query params
 */
const getNProducts = async () => {
  const URL = "https://fakestoreapi.com/products?limit=20&sort=desc";

  const response = await fetch(URL, {
    method: "GET",
    headers: {},
  });
  const data = await response.json();
  console.log("getNProducts: ", data);
};

/**
 * 3. request con método POST, sin header con body
 */
const postCreateProduct = async () => {
  const URL = "https://fakestoreapi.com/products";
  const producto = {
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  };
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(producto),
  });
  const data = await response.json();
  console.log("postCreateProduct: ", data);
};
