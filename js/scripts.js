// Obtén todos los elementos de la línea de tiempo
const timelineItems = document.querySelectorAll('.timeline-item');

// Agrega un evento click a cada elemento de la línea de tiempo
timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remueve la clase 'active' de todos los elementos
    timelineItems.forEach(item => {
      item.classList.remove('active');
    });

    // Agrega la clase 'active' al elemento seleccionado
    item.classList.add('active');
  });
});