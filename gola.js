//Ex1
let nota = prompt("¿Nota?");

const aprobado = (nota) => {
  if(nota < 4){
  alert("Desaprobó");
} else if(nota > 4){
  alert("aprobó");
} else {
  alert("Mmmm recuperatorio");
}}
//Ex2
const suma = () => {
  let num2 = parseInt(prompt("Tirá un número"));
  let num5 = parseInt(prompt("Gracias. Tirá otro número"));
  console.log(num2 + num5);
  return num2 + num5;
}
//Ex3
const clave = () => {
  let passcode1 = prompt("Escribi una contraseña");
  let passcode2 = prompt("Repetila que no me quedó claro");
  if(passcode1 === passcode2){
    alert("Contraseña verificada")
  } else {
    alert("Error: sos inútil y pusiste contraseñas diferentes")
  }
}
//Ex4
const trad = () => {
  let palabra = prompt("Type a word...");
  switch (palabra){
    case "casa": alert("House, Home");
    break;
    case "mesa": console.log("Desk, Table");
    break;
    case "perro": console.log("Dog");
    break;
    case "gato": console.log("Cat");
    break;
    default: console.log("This word isn't found in the shitty dictionary constructed. Thanks for wasting your time.")
  }
}
