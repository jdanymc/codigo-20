/**
 * el uso de la sentencia awiat sirve para:
 * - esperar el resultado que retorna una promesa y guardarlo en una variable
 * La sentencia await solo se puede usar dentro de la funcion async
 * */
const url = "https://reqres.in/api/users/2";
const getProductos = async ()=>{
    const response = await axios.get(url)
    //throw 'Error!!';
    return response.data;
}

console.log(1);
getProductos().then((data)=>{
    console.log('data: ',data);
}).catch(error =>{
    console.log('error: ',error)
});
console.log(2);
console.log(3);
console.log(4);

//---------
// primera forma promise
axios.get('https://reqres.in/api/users/2').then((response) => {
	console.log(response);
});

// segunda forma async funtion clasica
async function getUser() {
	const response = await axios.get('https://reqres.in/api/users/2');
	return response.data;
}

getUser().then(data =>{
    console.log('data getUser: ',data);
});

//tercera forma async funcion flecha
const getUserV2 = async () => {
    const response = await axios.get('https://reqres.in/api/users/2');
    return response.data;
};
getUserV2().then(data =>{
    console.log('data getUserV2: ',data);
});
