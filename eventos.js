
const myDiv = document.createElement('div');
const myButton = document.getElementById("Butt");


function handleClick() {
myDiv.appendChild(myButton);
document.body.appendChild(myDiv);
}

myButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Detener la propagación del evento solo en el botón
    handleClick();
});

// Modificar estilo del div
myDiv.style.padding = '5px';
myDiv.style.backgroundColor = 'green';


//Evento al hacer click en el div
myDiv.addEventListener("click", function(event) {
    if (event.target === myDiv) {
        alert("Hola! Soy el div");
    }
});