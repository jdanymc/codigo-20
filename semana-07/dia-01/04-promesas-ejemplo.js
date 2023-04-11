const url = "https://fakestoreapi.com/products";
const contenedor = document.querySelector("#contenedor");

const obtenerProductos = () => {
  axios.get(url).then(function (response) {
    //console.log("data: ", response.data);
    dibujarProductos(response.data)
});
};

const dibujarProductos = (productos = []) => {
    //console.log("productos: ", productos);
    productos.forEach((prod) => {
        console.log("producto: ", prod);
        const columna = document.createElement('div');
        const img = document.createElement('img');
        const cuerpo = document.createElement('div');
        const titulo = document.createElement('h5');
        const contenido = document.createElement('p');

        const footer = document.createElement('div');
        
        const footer_rating = document.createElement('div');
        const footer_rating_img = document.createElement('i');
        const rating = document.createElement('span');

        const footer_price = document.createElement('div');
        const footer_price_img = document.createElement('i');
        const price = document.createElement('span');
        

        footer_rating_img.classList.add('fa-solid', 'fa-star','p-1');
        footer_rating.appendChild(footer_rating_img);
        rating.innerText = prod.rating.rate;
        footer_rating.appendChild(rating);
        footer.appendChild(footer_rating);

        footer_price_img.classList.add('fa-solid','fa-money-bill','p-1');
        footer_price.appendChild(footer_price_img);
        price.innerText = prod.price;
        footer_price.appendChild(price);
        footer.appendChild(footer_price);

        columna.classList.add('col-sm-5','col-md-3','col-lg-2','card','m-1');

        img.src = prod.image;
        img.classList.add('card-img-top')
        
        cuerpo.classList.add('card-body');
        
        titulo.classList.add('card-title');
        titulo.innerText = prod.title;
        
        contenido.classList.add('card-text');
        contenido.innerText = prod.description;
        
        footer.classList.add('card-footer');
        
        cuerpo.appendChild(titulo);
        cuerpo.appendChild(contenido);
        columna.appendChild(img);
        columna.appendChild(cuerpo);
        columna.appendChild(footer)
        contenedor.appendChild(columna)
        
    });
};

obtenerProductos();

/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/
