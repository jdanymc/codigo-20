let c = 0;

while (c < 10) {
  console.log(c);
  c = c + 1;
}

let password = "abc";
while (password !== "abc") {
  password = prompt("Ingrese password");
}

let password1 = "abc";
do {
  password1 = prompt();
} while (password1 !== "abc");
