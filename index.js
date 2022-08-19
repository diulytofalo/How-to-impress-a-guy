const button1El = document.querySelector('.button1');

button1El.addEventListener('mouseover', (event)=>{
    const x = event.pageX - button1El.offsetLeft;
    const y = event.pageY - button1El.offsetTop;

    button1El.style.setProperty('--xPosition', x + 'px');
    button1El.style.setProperty('--yPosition', y + 'px');
});
