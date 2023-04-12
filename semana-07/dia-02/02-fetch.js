const url = "https://reqres.in/api/users/2";

//forma 1
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// forma 2 async - await
const getUsuario = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data: ", data);
};

getUsuario();
