const divs = document.querySelectorAll('.layout div');

divs.forEach((div) => {
  div.addEventListener('mouseenter', () => {
    divs.forEach((otherDiv) => {
      if (otherDiv !== div) {
        otherDiv.classList.add('blur');
      }
    });
  });

  div.addEventListener('mouseleave', () => {
    divs.forEach((otherDiv) => {
      otherDiv.classList.remove('blur');
    });
  });
});
