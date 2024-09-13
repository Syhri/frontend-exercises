console.log("Hello, World!"); // Hello, World!

const button = document.createElement("button");
button.innerText = "Click me";
document.body.appendChild(button);
const welcome = () => {
  alert("Selamat datang!");
};
button.addEventListener("click", welcome);

const nama = "Fitra";
const umur = 19;
const apakahPelajar = true;
console.log(nama); // Fitra
console.log(umur); // 19
console.log(apakahPelajar); // true

const a = 10;
const b = 5;
const c = a + b;
console.log(c); // 15
