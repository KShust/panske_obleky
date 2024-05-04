const svg = document.getElementById('product-image');
const colorButtons = document.querySelectorAll('.color-box');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.id;
    switch (color) {
      case 'bila':
        svg.style.fill = 'white';
        svg.style.stroke = 'black'
        break;
      case 'cerna':
        svg.style.fill = 'black';
        svg.style.stroke = 'white'
        break;
      case 'cervena':
        svg.style.fill = 'red';
        svg.style.stroke = 'black'
        break;
      case 'modra':
        svg.style.fill = 'skyblue';
        svg.style.stroke = 'black'
        break;
      default:
        svg.style.fill = '#a6a6a6';
        svg.style.stroke = 'black'
    }
  });
});
