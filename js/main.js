// let modal = document.getElementById('directos');
// let flex = document.getElementById('flex');
// let abrir = document.getElementById('abrir');
// let cerrar = document.getElementById('close');

// abrir.addEventListener('click', function () {
//     modal.style.display = 'block';
// });

// cerrar.addEventListener('click', function () {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', function (e) {
//     console.log(e.target);
//     if (e.target == flex) {
//         modal.style.display = 'none';
//     }
// });


$(function () { // DOM ready
    // Toggle open and close nav styles on click
    $('#menu-toggle').click(function () {
        $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#menu-toggle').on('click', function () {
        this.classList.toggle('active');
    });
}); // end DOM ready