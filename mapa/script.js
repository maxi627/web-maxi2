// Función para inicializar el mapa
function initMap() {
    // Coordenadas del lugar específico (en este caso, centenario, Neuquen)
    var ubicacion = { lat: -38.827756577857194, lng: -68.14426897098832 };
    
    // Crea un nuevo mapa en el elemento con id "map"
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15, // Nivel de zoom
      center: ubicacion // Centra el mapa en la ubicación específica
    });
  
    // Crea un marcador en la ubicación específica
    var marker = new google.maps.Marker({
      position: ubicacion,
      map: map,
      title: "Torre Eiffel, París" // Título del marcador (opcional)
    });
  }
  