const body = document.querySelector('body');

body.addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    let y = event.offsetY;

    let heart = document.createElement('span');
    body.appendChild(heart);
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    let size = Math.random() * 120;
    heart.style.width =  size + 'px';
    heart.style.height = size + 'px';
    setTimeout(() => heart.remove(), 2000);
})
