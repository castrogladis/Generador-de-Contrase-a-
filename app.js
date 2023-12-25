const boton = document.querySelector("button");
const contraseña = document.getElementById("nueva-contraseña")

function numerosAleatorios() {
    let digitos = "zxcvbnmasdfghjklñqwertyuiopASDFGHJKLÑZXCVBNMQWERTYUIOP+*-_:.;<>1234567890";
    let nuevaContraseña = "";
    
    for (let i = 0; i < 12 ; i++) {
    let digitosNew = Math.floor(Math.random() * digitos.length);
    nuevaContraseña += digitos[digitosNew]
    }
    return nuevaContraseña;
}

boton.addEventListener("click", () => {
  let contraseñaNew = numerosAleatorios();
  contraseña.textContent = contraseñaNew;
});

