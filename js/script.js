
const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 600);
}

const loop = setInterval(() => {

    console.log('loop')

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (canoPosition <= 75 && canoPosition > 0 && marioPosition <= 115) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/MarioYoshiDied.png';

        clearInterval(loop);
        
    }

}, 10);



document.addEventListener('keydown', jump);
