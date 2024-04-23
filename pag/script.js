document.addEventListener('DOMContentLoaded', function() {
    console.log("Script cargado correctamente");

    const imagenes = ['/image/t1.jpg', '/image/t2.jpg', '/image/t3.jpg', '/image/t4.jpg', '/image/t5.jpg', '/image/t6.jpg', '/image/t7.jpg', '/image/t8.jpg', '/image/t9.jpg', '/image/t10.jpg', '/image/t11.jpg', '/image/t12.jpg', '/image/t13.jpg', '/image/t14.jpg', '/image/t15.jpg', '/image/t16.jpg', '/image/t17.jpg', '/image/t18.jpg', '/image/t19.jpg', '/image/t20.jpg', '/image/t21.jpg', '/image/t22.jpg', '/image/t23.jpg', '/image/t24.jpg', '/image/t25.jpg', '/image/t26.jpg', '/image/t27.jpg', '/image/t28.jpg', '/image/t29.jpg', '/image/t30.jpg', '/image/t31.jpg', '/image/t32.jpg', '/image/t33.jpg', '/image/t34.jpg', '/image/t35.jpg', '/image/t36.jpg', '/image/t37.jpg', '/image/t38.jpg', '/image/t39.jpg', '/image/t40.jpg', '/image/t41.jpg', '/image/t42.jpg', '/image/t43.jpg', '/image/t44.jpg', '/image/t45.jpg', '/image/t46.jpg', '/image/t47.jpg', '/image/t48.jpg', '/image/t49.jpg', '/image/t50.jpg', '/image/t51.jpg', '/image/t52.jpg', '/image/t53.jpg', '/image/t54.jpg']; 
    let indice = 0; 
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');
    const imagen = document.getElementById('imagen');

    // Obtener el ancho de la pantalla
    const screenWidth = window.innerWidth;
    let touchStartX = 0;
    let touchEndX = 0;

    function cambiarImagen(direccion) {
        if (direccion === 'izquierda') {
            indice = (indice - 1 + imagenes.length) % imagenes.length;
        } else {
            indice = (indice + 1) % imagenes.length;
        }
        imagen.src = imagenes[indice]; 
        imagen.alt = `Imagen ${indice + 1}`; 
    }

    // Función para avanzar a la siguiente imagen
    function siguienteImagen() {
        cambiarImagen('derecha');
    }

    // Función para retroceder a la imagen anterior
    function anteriorImagen() {
        cambiarImagen('izquierda');
    }

    botonAnterior.addEventListener('click', anteriorImagen);
    botonSiguiente.addEventListener('click', siguienteImagen);

    // Listener para el evento touchstart
    imagen.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
    });

    // Listener para el evento touchmove
    imagen.addEventListener('touchmove', function(event) {
        touchEndX = event.touches[0].clientX;
    });

    // Listener para el evento touchend
    imagen.addEventListener('touchend', function(event) {
        // Calcular la distancia recorrida
        const deltaX = touchEndX - touchStartX;

        // Si el desplazamiento es mayor a 50px y el ancho de la pantalla es menor o igual a 768px
        if (Math.abs(deltaX) > 50 && screenWidth <= 768) {
            // Si el desplazamiento es hacia la derecha
            if (deltaX > 0) {
                anteriorImagen();
            } else { // Si el desplazamiento es hacia la izquierda
                siguienteImagen();
            }
        }
    });
});
