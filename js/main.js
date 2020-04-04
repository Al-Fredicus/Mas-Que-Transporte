let ventana = document.getElementById('ventana-flotante');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');

abrir.addEventListener('click', function(){
    ventana.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    ventana.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        ventana.style.display = 'none';
    }
});