
var boton1 =  document.getElementById("boton1");
var boton2 =  document.getElementById("boton2");
var left = Math.floor((Math.random() * 100) + 1);


const botonSi = () => {
    alert("Será? cual sea tu respuesta dímelo por whats plis ");
}

const botonNo = () =>{
    boton2.style.position = 'absolute';
    boton2.style.top = (Math.random() * window.innerHeight -20) + 'px';
    boton2.style.left = (Math.random() * window.innerWidth -20) + 'px';
}
