const circle = document.querySelector('.cursor-circle');

document.addEventListener('mousemove', (e) => {
  circle.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});
