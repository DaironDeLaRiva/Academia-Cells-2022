/* const miTitulo = document.querySelector('h1');
miTitulo.textContent = "!Hola mundo"; */

/* let nombreDeLaVariable = "Dairon";
if (nombreDeLaVariable === "Dairon")
{
   alert('Si, mi nombre si es Dairon!'); 
}
else
{
    alert('Nop, mi nombre es Dairon');
} */

/* nombreDeLaVariable = document.querySelector('h1');
alert(' ¡Hola! '); */

function multiplica(num1,num2)
{
    let result = num1 * num2;
    return result;
}

let miImage = document.querySelector('img');
miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/fondo.jfif') {
        miImage.setAttribute('src','images/fondo1.jfif');
    }else{
        miImage.setAttribute('src','images/fondo.jfif');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'BBVA is genial, ' + miNombre;
    }
}  
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'BBVA es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}



