const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('click', () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
  window.location.href = 'yes-page.html'; // Redirect to yes page
});
