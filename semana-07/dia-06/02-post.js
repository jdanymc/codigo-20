const btn_register = document.getElementById("btn_register");
const form_register = document.getElementById("form_register");
/*
username.addEventListener("keyup", (e) => {
  //console.log(e.target.value);
  //console.log(e.target.name);
});*/

btn_register.addEventListener("click", (e) => {
 // e.preventDefault();  --> solo si type!=button
  const title = document.getElementById("title");
  const body = document.getElementById("body");
  const userId = document.getElementById("userId");
  //console.log({username,password});
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title:title.value, body:body.value, userId: parseInt(userId.value) }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      title.value= "";
      body.value = "";
      userId.value = "";
    });
});

/*
// para usar submit debe quitarse el type=button
form_register.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log({ username, password });
});
*/


/*
btn_register.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  //console.log({username,password});
  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      password.value = "";
      username.value = "";
    });
});

form_register.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log({ username, password });
});
*/
