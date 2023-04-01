// [].filter retorna elementos que cumplan la condicion

// filtrar numeros pares
const numeros = [5, 20, 12, 6, 80, 9, 61];

const pares = numeros.filter((elemento) => elemento % 2 === 0);

console.log("pares : ", pares);

// filtrar usuario
let users = [
  {
    id: 1,
    email: "george.bluth@gmail.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 50,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 35,
  },
  {
    id: 4,
    email: "eve.holt@gmail.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 15,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 36,
  },
];

const usersGmail = users.filter((user) => user.email.includes("@gmail"));
console.log("usuariosGmail", usersGmail);

const usersGmailv2 = users.filter(({ email }) => email.includes("@gmail"));
console.log("usuariosGmailv2", usersGmailv2);

//find es lo mismo que filter pero devuelve un solo elemento o undefined
const user5 = users.find(({ id }) => id === 5);
console.log("user id=5 : ", user5);

/**
 * [].reduce((sumatoria,elemetoactual)=>{ retorna la sumatoria +el nuevo elemento})
 *
 */

const total = numeros.reduce((sumatoria, elementoActual) => sumatoria + elementoActual);
console.log('total suma : ',total);


/**
 * [].splice
 * 
 */
console.log(users.splice(4,1,{age:31,first_name:'Jorge',last_name:'Garbi'}))